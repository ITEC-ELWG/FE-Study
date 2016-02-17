<?php

/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/20
 * Time: 19:14
 */
class StudentModel extends CI_Model
{
    public function insert($studentId, $name, $gradeId, $email, $phone, $birthday, $tutorId, $image)
    {
        $this->db->insert(STABLE, array(
            'studentId' => $studentId,
            'name' => $name,
            'gradeId' => $gradeId,
            'email' => $email,
            'phone' => $phone,
            'birthday' => $birthday,
            'tutorId' => $tutorId,
            'image' => $image
        ));
        return $this->db->insert_id();
    }

    public function delete($id)
    {
        $this->db->delete(STABLE, array(
            'id' => $id
        ));
        return $this->db->affected_rows();
    }

    public function searchAll($limit = STUDENT_LIMIT, $offset = 0)
    {
        $this->db->limit($limit, $offset);
        $this->db->order_by('studentId');
        $this->db->select(STABLE.'.studentId, '.STABLE.'.name, '.STABLE.'.email, '.STABLE.'.phone, '.STABLE.'.birthday, '.STABLE.'.image, '
            .TTABLE.'.tutor, '.GTABLE.'.grade');
        $this->db->from(STABLE);
        $this->db->join(GTABLE, GTABLE.'.id = '.STABLE.'.gradeId');
        $this->db->join(TTABLE, TTABLE.'.id = '.STABLE.'.tutorId');
        $query = $this->db->get();
        return $query->result_array();
    }

    public function searchFromOne($column, $val, $limit = STUDENT_LIMIT, $offset = 0)
    {
        $this->db->limit($limit, $offset);
        $this->db->order_by('studentId');
        $this->db->select(STABLE.'.studentId, '.STABLE.'.name, '.STABLE.'.email, '.STABLE.'.phone, '.STABLE.'.birthday, '.STABLE.'.image, '
            .TTABLE.'.tutor, '.GTABLE.'.grade');
        $this->db->from(STABLE);
        $this->db->where($column, $val);
        $this->db->join(GTABLE, GTABLE.'.id = '.STABLE.'.gradeId');
        $this->db->join(TTABLE, TTABLE.'.id = '.STABLE.'.tutorId');
        $query = $this->db->get();
        return $query->result_array();
    }

    public function searchNum()
    {
        return $this->db->count_all(STABLE);
    }

    public function searchFromGradeTutor($gradeId, $tutorId, $limit = STUDENT_LIMIT, $offset = 0)
    {
        $this->db->limit($limit, $offset);
        $this->db->order_by('studentId');
        $this->db->select(STABLE.'.studentId, '.STABLE.'.name, '.STABLE.'.email, '.STABLE.'.phone, '.STABLE.'.birthday, '.STABLE.'.image, '
            .TTABLE.'.tutor, '.GTABLE.'.grade');
        $this->db->from(STABLE);
        $this->db->where('gradeId', $gradeId)->where('tutorId', $tutorId);
        $this->db->join(GTABLE, GTABLE.'.id = '.STABLE.'.gradeId');
        $this->db->join(TTABLE, TTABLE.'.id = '.STABLE.'.tutorId');
        $query = $this->db->get();
        return $query->result_array();
    }

    public function update($id, $studentId, $name, $gradeId, $email, $phone, $birthday, $tutorId, $image)
    {
        $array = array(
            'studentId' => $studentId,
            'name' => $name,
            'gradeId' => $gradeId,
            'email' => $email,
            'phone' => $phone,
            'birthday' => $birthday,
            'tutorId' => $tutorId,
            'image' => $image
        );
        $this->db->where('id', $id);
        $this->db->update(STABLE, $array);
        return $this->db->affected_rows();
    }
}