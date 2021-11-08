# 2021-02_database

## 3주차 실습 진행 방법
1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:ehdgnsdl/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/ehdgnsdl/2021-02_database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'dbdesign', // 본인이 만든 데이터베이스 이름
        password: 'root', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">Create table student</span>
CREATE table student(student ID INTEGER NOT NULL,
name VARCHAR(30) NOT NULL,
department VARCHAR(30) NOT NULL,
grade INTEGER NOT NULL,
Admission Date VARCHAR(60),
email VARCHAR(30));
<br>
-> student라는 table을 생성하는 query문
<br>
-> 학번(studentID)은 int, 성명(name)은 varchar(30), 학과(department)는 varchar(30), 학년(grade)은 int, 입학일자(AdmissionDate)는 VARCHAR(60), 이메일(email)은 VARCHAR(30)으로 속성 이름과 타입을 설계했다.
<br>

## <span style="color:red">desc student;</span>

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
studentID|int|No| |NULL| |
name|varchar(30)|No| |NULL| |
department|varchar(30)|No| |NULL| |
grade|int|No| |NULL| |
AdmissionDate|varchar(60)|YES| |NULL| |
email|varchar(30)|YES| |NULL| |


-> student라는 table의 속성들을 확인하는 query문

<br>

## <span style="color:red">insert into student values</span>
- insert into student values(12123456, '김철수', '정보통신공학과', 4, 'Thu Mar 01 2012 00:00:00 GMT+0900(대한민국 표준시)
', '철수@gmail.com');

- insert into student values(12123456, '김철수', '정보통신공학과', 4, 'Thu Mar 01 2012 00:00:00 GMT+0900(대한민국 표준시)
', '철수@gmail.com');

<br>

-> student라는 table에 값들을 insert했다.


<br>

## <span style="color:red">show * from student</span>

StudentID|name|department|grade|AdmissionDate|email|
---|---|---|---|---|---|
12123456|김철수|정보통신공학과|4|Thu Mar 01 2012 00:00:00 GMT+0900 (대한민국 표준시)|철수@gmail.com|
12171843|장동훈|정보통신공학과|3|Thu Mar 01 2012 00:00:00 GMT+0900 (대한민국 표준시)|동훈@gmail.com|

<br>

-> student라는 table에 들어있는 전체 값들을 확인하는 query문


<br><br>
<br><br>
<br><br>

## 8주차 실습 진행 방법
1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:ehdgnsdl/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/ehdgnsdl/2021-02_database.git
2. week_8 폴더로 이동
    > cd week_8
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'week8', // 본인이 만든 데이터베이스 이름
        password: 'root', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>


## <span style="color:red">desc employee;</span>

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Fname|varchar(10)|No| |NULL| |
Minit|char(1)|Yes| |NULL| |
Lname|varchar(20)|No| |NULL| |
Ssn|char(9)|No|PRI|NULL| |
Bdate|date|YES| |NULL| |
Address|varchar(30)|YES| |NULL| |
Sex|char(1)|YES| |NULL| |
Salary|decimal(5,0)|YES| |NULL| |
Super_ssn|char(9)|YES| |NULL| |
Dno|int|No| |NULL| |

-> employee라는 table의 속성들을 확인하는 query문

<br>

## <span style="color:red">desc department;</span>

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Dname|varchar(15)|No|UNI|NULL| |
Dnumber|int|No|PRI |NULL| |
Mgr_ssn|char(9)|No|MUL|NULL| |
Mgr_start_date|date|Yes| |NULL| |

-> department라는 table의 속성들을 확인하는 query문

<br>

## <span style="color:red">show * from employee</span>

Fname|Minit|Lname|Bdate|Adress|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|
철수|M|김|Sat Jan 01 2000 00:00:00 GMT +0900(대한민국 표준시)|인천|남|1000| |1|
Park|B|Smith|Sat Jan 09 1965 00:00:00 GMT +0900(대한민국 표준시)|731 Fondren Houston Tx|M|3000| |5|
Franklin|T|Wong|Wed Dec 08 1965 00:00:00 GMT+0900(대한민국 표준시)|638 Voss, Houston Tx|M|4000| |5|
Joyce|A|English|Mon Jul 31 1972 00:00:00 GMT+0900 (대한민국 표준시)|5631 Rice, Houston Tx|F|25000| |5|
Janmes|E|Borg|Wed May 31 1950 00:00:00 GMT +1000(대한민국 표준시)|450 Stone, Houston Tx|F|55000| |1|
Ahmad|V|Jabbar|Wed Sep 02 1970 00:00:00 GMT +0900(대한민국 표준시)|975 Fire Oak, Humble Tx|M|35000| |4|

-> employe table에 들어있는 전체 값들을 확인하는 query문

<br>

## <span style="color:red">show * from department</span>

Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
정보통신공학과|1|12123456|Fri Jan 01 2021 00:00:00 GMT+0900 (대한민국 표준시)|
Administration|4|123456789|Tue Feb 14 1950 00:00:000 GMT+0900 (대한민국 표준시)|
Research|5|987654321|Thu Feb 18 1965 00:00:00 GMT+0900 (대한민국 표준시)|

-> department table에 들어있는 전체 값들을 확인하는 query문

<br><br>
<br><br>
<br><br>


## 10주차 실습 진행 방법
1. 레포지토리 복사 (wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:ehdgnsdl/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/ehdgnsdl/2021-02_database.git
2. week_10 폴더로 이동
    > cd week_10
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)

<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'week10', // 본인이 만든 데이터베이스 이름
        password: 'root', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

<br>

## <span style="color:red">Create table project</span>
CREATE TABLE PROJECT
(Pname varchar(15) not null,
Pnumber int not null,
Plocation varchar(15),
primary key(Pnumber));

-> project라는 table을 생성하는 query문

<br>

## <span style="color:red">desc project;</span>

Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Pname|varchar(15)|No| |NULL| |
Pnumber|int|No|PRI | NULL| |
Plocation|varchar(15)|Yes| | NULL| |


-> project라는 table의 속성들을 확인하는 query문

<br>

## <span style="color:red">show * from project</span>

Pname|Pnumber|Polcation|
---|---|---|
car|1|32 biden|
airplane|2|35 holi|
ship|3|31 hle|
car|4|91 dahle|
car|5|52 idle|


-> project table에 들어있는 전체 값들을 확인하는 query문

