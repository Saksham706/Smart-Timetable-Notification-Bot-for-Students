import Notification from '../models/Notification.js';
import User from '../models/User.js';
import { notifyClass } from '../utils/notificationHelper.js';

export const sendNotification = async (req, res) => {
  try {
    const { title, message, targetClass, type, sentByName } = req.body;

    // ✅ Validate
    if (!title || !message || !targetClass) {
      console.error('❌ Missing required fields');
      return res.status(400).json({
        success: false,
        message: 'Please provide title, message, and targetClass'
      });
    }


    // ✅ Send to all students in target class using notifyClass utility
    try {
      await notifyClass(
        targetClass,
        title,
        `[${sentByName || req.user.name}] ${message}`,
        type || 'general'
      );
    } catch (notifyError) {
      console.error('⚠️ Error notifying class:', notifyError);
      // Don't fail - notification might already be created
    }

    // ✅ Create a log/record of the notification sent
    const notificationRecord = new Notification({
      recipient: req.user._id,
      title: `[${req.user.role.toUpperCase()}] ${title}`,
      message: `To ${targetClass}: ${message}`,
      type: type || 'general',
      read: false
    });

    await notificationRecord.save();


    res.status(201).json({
      success: true,
      message: `✅ Notification sent to ${targetClass}!`,
      data: notificationRecord
    });

  } catch (error) {
    console.error('🔴 Error sending notification:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error sending notification'
    });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id })
      .sort({ createdAt: -1 })
      .limit(50);

    const unreadCount = notifications.filter(n => !n.read).length;

    res.status(200).json({
      success: true,
      unreadCount,
      data: notifications
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching notifications'
    });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: 'Notification not found'
      });
    }

    res.status(200).json({
      success: true,
      data: notification
    });
  } catch (error) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({
      success: false,
      message: 'Error marking notification as read'
    });
  }
};

export const markAllAsRead = async (req, res) => {
  try {
    const result = await Notification.updateMany(
      { recipient: req.user._id, read: false },
      { read: true }
    );


    res.status(200).json({
      success: true,
      message: 'All notifications marked as read'
    });
  } catch (error) {
    console.error('Error marking all as read:', error);
    res.status(500).json({
      success: false,
      message: 'Error marking all as read'
    });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: 'Notification not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Notification deleted'
    });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting notification'
    });
  }
};

export const clearReadNotifications = async (req, res) => {
  try {
    const result = await Notification.deleteMany({
      recipient: req.user._id,
      read: true
    });

    console.log(`✅ Deleted ${result.deletedCount} read notifications`);

    res.status(200).json({
      success: true,
      message: 'Read notifications cleared'
    });
  } catch (error) {
    console.error('Error clearing notifications:', error);
    res.status(500).json({
      success: false,
      message: 'Error clearing notifications'
    });
  }
};
