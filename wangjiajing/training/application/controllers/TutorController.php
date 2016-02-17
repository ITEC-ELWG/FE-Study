<?php

/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/21
 * Time: 16:30
 */
class TutorController extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
        $this->load->model('TutorModel');
    }

    public function addTutor()
    {
        $tutor = $this->input->post('tutor');
        if($tutor == null)
        {
             echo toJsonFail(NO_INPUT);
        }
        else
        {
            $id = $this->TutorModel->insert($tutor);
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

    public function getTutorList()
    {
        $page = $this->input->get('page');
        $offset = ($page == null)? 0 : (TUTOR_LIMIT * $page);
        $data = $this->TutorModel->search(TUTOR_LIMIT, $offset);
        echo toJsonSuccess($data);
    }

    public function putTutor($id)
    {
        $id = intval($id);
        $tutor = $this->input->input_stream('tutor');
        if($id == null || $tutor == null)
        {
            echo toJsonFail(NO_INPUT);
        }
        else
        {
            $result = $this->TutorModel->update($id, $tutor);
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

    public function deleteTutor($id)
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
                $this->TutorModel->delete($key);
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

    public function deleteTutors($identity)
    {
        $id = $this->SelectionModel->search($identity);
        $this->db->trans_start();
        foreach($id as $key)
        {
            $this->TutorModel->delete($key);
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
                $this->SelectionModel->insert($identity, 'tutor', $key);
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