import axios from 'axios';
import AuthService from '../utils/auth.ts';
import type { Event } from '../interfaces/event.tsx';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/events';


// Fetch all events
export const fetchEvents = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/public`);
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Create a new event (authenticated)
export const createEvent = async (event: Event) => {
  try {
    const token = AuthService.getToken();
    await axios.post(API_URL, event, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Delete an event (authenticated)
export const deleteEvent = async (id: number) => {
  try {
    const token = AuthService.getToken();
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};

// implement Updating events w/authenticated
export const updateEvent = async (id: number, event: Event): Promise<Event> => {
  try {
    const token = AuthService.getToken();
    const { data } = await axios.put<Event>(`${API_URL}/${id}`, event, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};