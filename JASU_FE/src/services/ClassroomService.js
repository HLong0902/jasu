import axios from 'axios';

const CLASSROOM_API_BASE = 'http://localhost:9200/admin/classroom'
class ClassroomService {
    getClassrooms() {
        return axios.get(CLASSROOM_API_BASE);
    }

    createClassroom(classroom) {
        return axios.post(CLASSROOM_API_BASE, classroom);
    }

    getClassroomById(classroomId) {
        return axios.get(CLASSROOM_API_BASE + '/' + classroomId);
    }

    updateClassroom(classroom, classroomId) {
        return axios.put(CLASSROOM_API_BASE + '/' + classroomId, classroom);
    }

    deleteClassroom(classroomId) {
        return axios.delete(CLASSROOM_API_BASE + '/' + classroomId);
    }
}
export default new ClassroomService();