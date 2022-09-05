import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/events";

class EventService {

    getAllEvents(){
        return axios.get(USER_API_BASE_URL + "/all/");
    }

    createEvent(event){
        return axios.post(USER_API_BASE_URL +"/add/", event);
    }

    getEventById(eventEventId){
        return axios.get(USER_API_BASE_URL + '/get/' + eventEventId);
    }

    updateEvent(event, eventEventId){
        return axios.put(USER_API_BASE_URL + '/update/' + eventEventId, event);
    }

    deleteEvent(eventEventId){
        return axios.delete(USER_API_BASE_URL + '/delete/' + eventEventId);
    }
}

export default new EventService();