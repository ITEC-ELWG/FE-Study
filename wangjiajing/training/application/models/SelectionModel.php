<?php

/**
 * Created by PhpStorm.
 * User: Augustus
 * Date: 2016/1/21
 * Time: 20:14
 */
class SelectionModel extends CI_Model
{
    public function insert($identity, $table, $selectId)
    {
        $this->db->insert(SETABLE, array(
            'identity' => $identity,
            'table' => $table,
            'selectId' => $selectId
        ));
        return $this->db->insert_id();
    }

    public function delete($identity)
    {
        $this->db->delete(SETABLE, array(
            'identity' => $identity
        ));
        return $this->db->affected_rows();
    }

    public function search($identity)
    {
        $this->db->select('selectId');
        $this->db->from(SETABLE);
        $this->db->where('identity', $identity);
        $query = $this->db->get();
        return $query->result_array();
    }
}