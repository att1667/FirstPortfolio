<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	
	include "../lib/dbconn.php";

	if ($mode=="modify")  //수정 글쓰기면....
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>한국타이어:모터스포츠</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./common/css/sub2common.css">
    <link rel="stylesheet" href="./css/sub2_4content.css">
    <link rel="stylesheet" href="./css/write_form.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
    <script>
        function check_input()
        {
            if (!document.board_form.subject.value)
            {
                alert("제목을 입력하세요!");    
                document.board_form.subject.focus();
                return;
            }

            if (!document.board_form.content.value)
            {
                alert("내용을 입력하세요!");    
                document.board_form.content.focus();
                return;
            }
            document.board_form.submit();
        }
    </script>
     <!--[if IE 9]>  
          <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
</head>
<body>
    <div class="wrap">
        <!-- 서브헤더영역 -->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="./common/images/sub2_visual.png" alt="비주얼이미지">
        </div>
        <div class="sub_menu">
            <h3>모터스포츠</h3>
            <ul>
                <li><a href="./sub2_1.html">경기소개</a></li>
                <li><a href="./sub2_2.html">서킷현장영상</a></li>
                <li><a href="./sub2_3.html">경기일정</a></li>
                <li class="current"><a href="./list.php">뉴스</a></li>
            </ul>
        </div>
        <article id="content">
            <div class="title_area">
                <div class="line_map">
                    <span class="hidden">HOME</span><i class="fas fa-home"></i> &gt; 모터스포츠 &gt; <strong>뉴스</strong>
                </div>
                <h2>News</h2>
            </div>
            <div class="content_area">
                 
				<?
					if($mode=="modify")
					{

				?>
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
				<?
					}
					else
					{
				?>
					<form  name="board_form" method="post" action="insert.php?table=<?=$table?>" enctype="multipart/form-data"> 
				<?
					}
				?>
				<div id="write_form">
					<table>
						<tbody>
							<tr id="write_row1">
								<th scope="row" class="col1">작성자</th>
								<td class="col2">
									<?=$usernick?>
								</td>
							<?
								if( $userid && ($mode != "modify") )
								{
							?>
								<td class="col3"><input type="checkbox" name="html_ok" value="y">HTML 쓰기</td>
							<?
								}	
							?>						
							</tr>
							<tr id="write_row2">
								<th scope="row" class="col1">제목</th>
								<td class="col2">
									<input type="text" name="subject" value="<?=$item_subject?>">
								</td>
							</tr>
							<tr id="write_row3">
								<th class="col1">내용</th>
								<td class="col2">
									<textarea rows="15" cols="79" name="content"><?=$item_content?></textarea>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="container">
						<ul id="write_row4">
							<li class="col1">이미지파일1</li>
							<li class="col2">
								<input type="file" name="upfile[]">
							</li>
						</ul>
						<? 	if ($mode=="modify" && $item_file_0)
							{
						?>
						<ul class="delete_ok">
							<li>
								<span><?=$item_file_0?> 파일이 등록되어 있습니다.</span>
							</li>
							<li>
								<input type="checkbox" name="del_file[]" value="0">삭제
							</li>
						</ul>
						<?
							}
						?>
						<ul id="write_row5">
							<li class="col1">이미지파일2</li>
							<li class="col2"><input type="file" name="upfile[]"></li>
						</ul>
						<? 	if ($mode=="modify" && $item_file_1)
							{
						?>
						<ul class="delete_ok">
							<li>
								<span><?=$item_file_1?> 파일이 등록되어 있습니다.</span>
							</li>
							<li>
								<input type="checkbox" name="del_file[]" value="1">삭제
							</li>	
						</ul>
						<?
							}
						?>
						<ul id="write_row6">
							<li class="col1">이미지파일3</li>
							<li class="col2">
								<input type="file" name="upfile[]">
							</li>
						</ul>
						<? 	if ($mode=="modify" && $item_file_2)
							{
						?>
						<ul class="delete_ok">
							<li>
								<span><?=$item_file_2?> 파일이 등록되어 있습니다.</span>
							</li>
							<li>
								<input type="checkbox" name="del_file[]" value="2"> 삭제
							</li>
						</ul>
						<?
							}
						?>
					</div>
					</div>

					<ul id="write_button">
						<li>
							<a href="#" onclick="check_input()">확인</a>
						</li>
						<li>
							<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
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