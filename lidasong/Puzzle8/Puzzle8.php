<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" lang="en">

<head>
    <title>拼图游戏</title>
    <meta content="text/html; charset = UTF-8" http-equiv="Content-Type">
    <script src="http://code.jquery.com/jquery-1.4.1.js"></script>
    <link rel="stylesheet" type="text/css" href="Puzzle8.css" />
    <script type="text/javascript" src="Puzzle8.js"></script>
</head>

<body>    
        <div id="head">
           <input id="commit" type="button" value="重置" onclick="loadXMLDoc()"></input>
        </div>
    <div>
        <table>
            <tr>
                <th>
                    <input type="button" id="buttonOne" onclick="clickButton(id)" value='1'></input>
                    <input type="button" id="buttonTwo" onclick="clickButton(id)" value='2'></input>
                    <input type="button" id="buttonThree" onclick="clickButton(id)" value='3'></input>
                </th>
            </tr>
            <tr>
                <th>
                    <input type="button" id="buttonFour" onclick="clickButton(id)" value='4'></input>
                    <input type="button" id="buttonFive" onclick="clickButton(id)" value='5'></input>
                    <input type="button" id="buttonSix" onclick="clickButton(id)" value='6'></input>

                </th>
            </tr>
            <tr>
                <th>
                    <input type="button" id="buttonSeven" onclick="clickButton(id)" value='7'></input>
                    <input type="button" id="buttonEight" onclick="clickButton(id)" value='8'></input>
                    <input type="button" id="blank" name="moveLocation" ></input>
                </th>
            </tr>
        </table>
    </div>
</body>

</html>
