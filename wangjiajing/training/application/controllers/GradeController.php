<?php

/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/21
 * Time: 16:03
 */
class GradeController extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('GradeModel');
    }

    public function addGrade()
    {
        $grade = $this->input->post('grade');
        if($grade == null)
        {
            echo toJsonFail(NO_INPUT);
        }
        else {
            $result = $this->GradeModel->insert($grade);
            if ($result == 0)
            {
                echo toJsonFail(FAIL_TO_INSERT);
            }
            else
            {
                echo toJsonSuccess($result);
            }
        }
    }

    public function getGradeList()
    {
        $page = $this->input->get('page');
        $offset = ($page == null)? 0 : (GRADE_LIMIT * $page);
        $data = $this->GradeModel->search(GRADE_LIMIT, $offset);
        echo toJsonSuccess($data);
    }

    public function putGrade($id)
    {
        $id = intval($id);
        $grade = $this->input->input_stream('grade');
        if($id == null || $grade == null)
        {
            echo toJsonFail(NO_INPUT);
        }
        else
        {
            $result = $this->GradeModel->update($id, $grade);
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

    public function deleteGrade($id)
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
                $this->GradeModel->delete($key);
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

    public function deleteGrades($identity)
    {
        $id = $this->SelectionModel->search($identity);
        $this->db->trans_start();
        foreach($id as $key)
        {
            $this->GradeModel->delete($key);
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
                $this->SelectionModel->insert($identity, 'grade', $key);
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