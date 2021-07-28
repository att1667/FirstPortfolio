<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</head>
<body>
    <div class="wrap">
        <div class="container">
            <header>
                 <h1 class="logo"><a href="../">한국타이어로고</a></h1>
            </header>
            <div class="innerWrap">
                <form  name="member_form" method="post" action="login.php">
                    <div id="id_pw_input">
                        <ul>
                            <li>
                                <input type="text" name="id" class="login_input" placeholder="아이디를 입력하세요">
                            </li>
                            <li>
                                <input type="password" name="pass" class="login_input" placeholder="비밀번호를 입력하세요">
                            </li>
                        </ul>						
                    </div>
            
                    <div id="login_button">
                        <button class="login_button" type="submit">로그인</button>
                    </div>
                    <ul class="find_idpw">
                        <li><i class="fas fa-lock"></i>보안접속</li>
                        <li>
                            <span><a href="id_find.php">아이디 찾기</a></span>
                            <span><a href="pw_find.php">비밀번호 찾기</a></span>
                        </li>
                    </ul>
                    <div id="join_button">
                        <span>아직 회원이 아니신가요?</span>
                        <a class="joinUs" href="../member/member_check.html">회원가입</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>