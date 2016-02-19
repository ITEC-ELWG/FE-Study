<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->load->view('guide');
	}

	public function v1()
	{
		$this->load->view('index');
	}

	public function v2()
	{
		$this->load->view('indexx');
	}
}
