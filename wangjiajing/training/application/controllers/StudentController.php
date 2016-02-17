<?php
 /* Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/20
 * Time: 20:00
 */
class StudentController extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('StudentModel');
        $this->load->model('GradeModel');
        $this->load->model('TutorModel');
    }

    public function getStudentsList()
    {
        $gradeId = $this->input->get('gradeId');
        $tutorId = $this->input->get('tutorId');
        $page = $this->input->get('page');
        $offset = ($page == null)? 0 : ($page * STUDENT_LIMIT);
        if($gradeId == null && $tutorId == null)
        {
            $data['students'] = $this->StudentModel->searchAll(STUDENT_LIMIT, $offset);
        }
        elseif($gradeId == null || $tutorId == null)
        {
            $column = ($gradeId == null)? 'tutorId' : 'gradeId';
            $val = ($gradeId == null)? $tutorId : $gradeId;
            $data['students'] = $this->StudentModel->searchFromOne($column, $val, STUDENT_LIMIT, $offset);
        }
        else
        {
            $data['students'] = $this->StudentModel->searchFromGradeTutor($gradeId, $tutorId, STUDENT_LIMIT, $offset);
        }
        $num = $this->StudentModel->searchNum();
        $data['pages'] = ceil($num / STUDENT_LIMIT);
        echo toJsonSuccess($data);
    }

    public function addStudent()
    {
        $studentId = $this->input->post('studentId');
        $name = $this->input->post('name');
        $gradeId = $this->input->post('gradeId');
        $email = $this->input->post('email');
        $phone = $this->input->post('phone');
        $birthday = $this->input->post('birthday');
        $tutorId = $this->input->post('tutorId');
        $image = $this->input->post('image');

        if($studentId == null || $name == null || $gradeId == null || $email == null || $phone == null || $birthday == null || $tutorId == null || $image == null)
        {
            echo toJsonFail(NO_INPUT);
        }
        else
        {
            $id = $this->StudentModel->insert($studentId, $name, $gradeId, $email, $phone, $birthday, $tutorId, $image);
            if($id == 0)
            {
                echo toJsonFail(FAIL_TO_INSERT);
            }
            else
            {
                echo toJsonSuccess($id);
            }
        }
    }

    public function putStudent($id)
    {
        $id = intval($id);
        $studentId = $this->input->input_stream('studentId');
        $name = $this->input->input_stream('name');
        $gradeId = $this->input->input_stream('gradeId');
        $email = $this->input->input_stream('email');
        $phone = $this->input->input_stream('phone');
        $birthday = $this->input->input_stream('birthday');
        $tutorId = $this->input->input_stream('tutorId');
        $image = $this->input->input_stream('image');

        if($id == null || $studentId == null || $name == null || $gradeId == null || $email == null || $phone == null || $birthday == null || $tutorId == null || $image == null)
        {
            echo toJsonFail(NO_INPUT);
        }
        else
        {
            $result = $this->StudentModel->update($id, $studentId, $name, $gradeId, $email, $phone, $birthday, $tutorId, $image);
            if($result == 0)
            {
                echo toJsonFail(FAIL_TO_UPDATE);
            }
            else
            {
                echo toJsonSuccessNoData();
            }
        }
    }

    public function deleteStudent($id)
    {
        $id = intval($id);
        if($id == null)
        {
            echo toJsonFail(NO_INPUT);
        }
        else
        {
            $this->db->trans_start();
            foreach($id as $key)
            {
                $this->StudentModel->delete($key);
            }
            $this->db->trans_complete();
            if($this->db->trans_status() == false)
            {
                echo toJsonFail(FAIL_TO_DELETE);
            }
            else
            {
                echo toJsonSuccessNoData();
            }
        }
    }

    public function deleteStudents($identity)
    {
        $id = $this->SelectionModel->search($identity);
        $this->db->trans_start();
        foreach($id as $key)
        {
            $this->StudentModel->delete($key);
        }
        $this->SelectionModel->delete($identity);
        $this->db->trans_complete();
        if($this->db->trans_status() == false)
        {
            echo toJsonFail(FAIL_TO_DELETE);
        }
        else
        {
            echo toJsonSuccessNoData();
        }
    }

    public function addSelection()
    {
        $id = json_decode($this->input->post('id'), true);
        if(empty($id))
        {
            echo toJsonFail(NO_INPUT);
        }
        else
        {
            $identity = getIdentity();
            $this->db->trans_start();
            foreach($id as $key)
            {
                $this->SelectionModel->insert($identity, 'student', $key);
            }
            $this->db->trans_complete();
            if($this->db->trans_status() == false)
            {
                echo toJsonFail(FAIL_TO_INSERT);
            }
            else
            {
                echo toJsonSuccess($identity);
            }
        }
    }
}