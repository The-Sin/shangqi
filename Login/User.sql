use master
go

if exists(select * from sysdatabases where name='DBUser')
drop database DBUser
go

create database DBUser
go

use DBUser
go

if exists(select * from sysobjects where name='UserPower')
drop table UserPower
go

create table UserPower
(
	P_ID int primary key,
	P_Name nvarchar(20),
	U_Type int 
)

insert into UserPower values(1,'系统管理员',0)
insert into UserPower values(2,'用户',1)
insert into UserPower values(3,'审查员',2)

if exists(select * from sysobjects where name='UserInfo')
drop table UserInfo
go

create table UserInfo
(
	U_NO int primary key identity(1000,1),
	U_JobNO int,
	U_LoginName nvarchar(50) not null,
	U_Password nvarchar(50) not null,
	U_Dept nvarchar(50),
	U_Name nvarchar(50),
	U_Sex nvarchar(10),
	U_Age int,
	U_Telephone nvarchar(50),
	U_Type int default(1),
	U_Role int default(0)
)

insert into UserInfo values(null,'admin@Gy4k.com','Gy4k.com',null,'Gy4k',null,null,null,0,123)
insert into UserInfo values(null,'1','1',null,null,null,null,null,default,default)

select * from UserInfo
select * from UserPower
delete UserInfo where U_Password='1'