<?php
Class User{
    private $db;
    //这里定义的变量， 在用户注册的时候会用到  
    public $username;
    public $password;
    public $email;

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
            $query="SELECT password FROM users WHERE username='".$username."'";
            $sth = $this->db->prepare($query);
            $sth->execute();
            $result = $sth->fetch(PDO::FETCH_ASSOC);
            return $result['password'];
        } catch (PDOException $e) {
            echo "<p class='error'>".$e->getMessage()."</p>";
        }

    }

    public function login($username, $password){
        $_SESSION['username'] = $username;//此处是为了在index.php界面判断当前的用户。
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
    
    public function register(){
        if ($this->username != NULL && $this->password != NULL && $this->email != NULL){
            $this->password = password_hash($this->password, PASSWORD_BCRYPT);
            try {
                $query="INSERT users VALUES(DEFAULT,?,?,?)";
                $sth = $this->db->prepare($query);            
                $sth->execute(array($this->username, $this->password, $this->email));
                return true;
            } catch (PDOException $e) {
//                 echo "<p class='error'>".$e->getMessage()."</p>";
                return false;
            } 
        }
    }
}

// $db = new PDO("mysql:host=localhost;port=3306;dbname=blog","root","");
// $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
// $user = new User($db);

// // var_dump($user->login('fengweiyao', 'fengweiyao'));
// $user->username = 'zhanglijing';
// $user->password = 'zhanglijing';
// $user->email = 'zhanglijing@qq.com';
// $user->register();

// var_dump($user->login('zhanglijing', 'zhanglijing'));
?>