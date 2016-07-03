<?php
Class User{
    private $db;

    function __construct($db){
        $this->db = $db;
    }

    public function is_logged_in(){
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
            return true;
        }else {
            return false;
        }
    }

    private function get_user_hash($username){
        try {
            $query="SELECT password FROM users WHERE username='fengweiyao'";
            $sth = $this->db->prepare($query);
            $sth->execute();
            $result = $sth->fetch(PDO::FETCH_ASSOC);
            return $result['password'];
        } catch (PDOException $e) {
            echo "<p class='error'>".$e->getMessage()."</p>";
        }

    }

    public function login($username, $password){
        $_SESSION['username'] = $username;
        $password_hashed = $this->get_user_hash($username);
        
        if (password_verify($password, $password_hashed) == true){
            $_SESSION['loggedin'] = true;
            return true;
        }else{
            return false;
        }
    }
    
    public function logout(){
        session_destroy();
    }
}

// $db = new PDO("mysql:host=localhost;port=3306;dbname=blog","root","");
// $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// $user = new User($db);

// var_dump($user->login('fengweiyao', 'fengweiyao'));
?>