import { useState } from 'react';
import { notifyError, notifySuccess } from 'utils/toast';
import NotificationServices from '../services/NotificationServices';

const useNotificationSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitNotification = async (notificationData) => {
        try {
            setLoading(true);
            const response = await NotificationServices.addNotification(notificationData);
            setLoading(false);
            notifySuccess('Notification sent successfully!');
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            notifyError('Failed to send notification. Please try again later.');
            throw error; // Re-throw the error to handle it outside
        }
    };

    const getAllNotifications = async () => {
        try {
            setLoading(true);
            const response = await NotificationServices.getAllNotification();
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            notifyError('Failed to fetch notifications. Please try again later.');
            throw error; // Re-throw the error to handle it outside
        }
    };

    const updateNotificationStatus = async (id, statusData) => {
        try {
            setLoading(true);
            const response = await NotificationServices.updateStatus(id, statusData);
            setLoading(false);
            notifySuccess('Notification status updated successfully!');
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            notifyError('Failed to update notification status. Please try again later.');
            throw error; // Re-throw the error to handle it outside
        }
    };

    const deleteNotification = async (id) => {
        try {
            setLoading(true);
            const response = await NotificationServices.deleteNotification(id);
            setLoading(false);
            notifySuccess('Notification deleted successfully!');
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            notifyError('Failed to delete notification. Please try again later.');
            throw error; // Re-throw the error to handle it outside
        }
    };

    return {
        loading,
        error,
        submitNotification,
        getAllNotifications,
        updateNotificationStatus,
        deleteNotification,
    };
};

export default useNotificationSubmit;
