<?php

/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/20
 * Time: 19:46
 */
class GradeModel extends CI_Model
{
    public function insert($grade)
    {
        $this->db->insert(GTABLE, array(
            'grade' => $grade
        ));
        return $this->db->insert_id();
    }

    public function delete($id)
    {
        $this->db->delete(GTABLE, array(
            'id' => $id
        ));
        return $this->db->affected_rows();
    }

    public function search($limit = GRADE_LIMIT, $offset = 0)
    {
        $this->db->limit($limit, $offset);
        $this->db->order_by('grade');
        $this->db->select('*');
        $this->db->from(GTABLE);
        $query = $this->db->get();
        return $query->result_array();
    }

    public function searchOne($gradeId)
    {
        $this->db->order_by('grade');
        $this->db->select('*');
        $this->db->from(GTABLE);
        $this->db->where('id', $gradeId);
        $query = $this->db->get();
        return $query->row_array();
    }

    public function update($id, $grade)
    {
        $this->db->where('id', $id);
        $this->db->update(GTABLE, array(
            'grade' => $grade
        ));
        return $this->db->affected_rows();
    }
}