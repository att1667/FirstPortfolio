<?
  session_start();
  //로그아웃은 등록된 session 변수를 삭제한다. (unset 명령어 사용)
  unset($_SESSION['userid']);
  unset($_SESSION['username']);
  unset($_SESSION['usernick']);
  unset($_SESSION['userlevel']);

  echo("
       <script>
          location.href = '../index.html'; 
         </script>
       ");
?>
