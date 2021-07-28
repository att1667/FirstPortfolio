<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한국타이어:채용안내</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub5common.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
     <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="./common/images/sub5_visual.png" alt="비주얼이미지">
        </div>
        <div class="sub_menu">
            <h3>채용안내</h3>
            <ul>
                <li><a href="./sub5_1.html">Proactive Culture</a></li>
                <li><a href="./sub5_2.html">Proactive People</a></li>
                <li><a href="./sub5_3.html">Proactive HR</a></li>
                <li class="current"><a href="./sub5_4.html">채용공지</a></li>
            </ul>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <span class="hidden">HOME</span><i class="fas fa-home"></i> &gt; 채용안내 &gt; <strong>채용공지</strong>
                </div>
                <h2>채용공지</h2>
            </div>
            <div class="content_area">
                <form  name="board_form" method="post" action="insert.php"> 
                    <table id="write_form">
                        <tbody>
                            <tr id="write_row1">
                                <th scope="row" class="col1"> 닉네임 </th>
                                <td class="col2"><?=$usernick?></td>
                                <td class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</td>
                            </tr>
                            <tr id="write_row2">
                                <th scope="row" class="col1"> 제목 </th>
                                <td class="col2"><input type="text" name="subject"></td>
                            </tr>
                            <tr id="write_row3">
                                <th scope="row" class="col1"> 내용</th>
                                <td class="col2"><textarea rows="15" cols="79" name="content"></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul id="write_button">
                        <li>
                            <input type="submit" value="확인">
                        </li>
                        <li>
                            <a href="list.php?page=<?=$page?>">목록</a>
                        </li>
                    </ul>
                </form>



            </div>
        </article>

        <!-- 서브푸터영역 -->
        <? include "../common/sub_foot.html" ?>
        
    </div>
    <!-- jQuery -->
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../common/js/fullnav.js"></script>
</body>
</html>