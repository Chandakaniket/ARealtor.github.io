<?php

  require_once 'connect.php';
	if(isset($_POST['submit_code'])) {

		$uname1=mysqli_real_escape_string($conn,$_POST['uname']);
		$result=mysqli_query($conn,"select * from Users where Username='".$uname1."'");
				if($result){

					$row=mysqli_fetch_array($result);

					if($row['Password']==$_POST['pswd'])
					{

						header("Location:landingPage.html");

					}

					else {





						header("Location:index.html");


					}
                }
        else{

            echo '<script language="javascript">';
        echo 'location.href="index.html"';

        echo '</script>';
        }

	}


?>
