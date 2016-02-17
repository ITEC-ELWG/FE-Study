<?php

/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/20
 * Time: 19:55
 */
class TutorModel extends CI_Model
{
    public function insert($tutor)
    {
        $this->db->insert(TTABLE, array(
            'tutor' => $tutor
        ));
        return $this->db->insert_id();
    }

    public function delete($id)
    {
        $this->db->delete(TTABLE, array('id' => $id));
        return $this->db->affected_rows();
    }

    public function search($limit = TUTOR_LIMIT, $offset = 0)
    {
        $this->db->limit($limit, $offset);
        $this->db->select('*');
        $this->db->from(TTABLE);
        $query = $this->db->get();
        return $query->result_array();
    }

    public function update($id, $tutor)
    {
        $this->db->where('id', $id);
        $this->db->update(TTABLE, array('tutor' => $tutor));
        return $this->db->affected_rows();
    }
}