use master
go

if exists(select * from sysdatabases where name='DBtest')
drop database DBtest
go

create database DBtest
go

use DBtest
go

if exists(select * from sysobjects where name='test')
drop table test
go

create table test
(
	id int primary key identity(1000,1),
	carNum int ,
	latitude float ,
	longitude float,
)

select * from test


--insert into test values(null,'admin@Gy4k.com','Gy4k.com',null,'Gy4k',null,null,null,0,123)

insert into test values(116.380967, 39.913285)

insert into test values(1, 113.907015, 22.526652)
insert into test values(1, 113.907215, 22.526452)
insert into test values(1, 113.907415, 22.526252)
insert into test values(1, 113.907615, 22.526052)
insert into test values(1, 113.907815, 22.525852)
insert into test values(1, 113.908015, 22.525652)
insert into test values(1, 113.908215, 22.525452)
insert into test values(1, 113.908415, 22.525252)
insert into test values(1, 113.908615, 22.525052)
insert into test values(1, 113.908901, 22.524874)


insert into test values(2, 113.906682, 22.526335)
insert into test values(2, 113.906382, 22.526035)
insert into test values(2, 113.906082, 22.525735)
insert into test values(2, 113.905782, 22.525435)
insert into test values(2, 113.905482, 22.525135)
insert into test values(2, 113.905182, 22.524835)
insert into test values(2, 113.904882, 22.524535)
insert into test values(2, 113.904582, 22.524235)
insert into test values(2, 113.904282, 22.523935)
insert into test values(2, 113.903628, 22.523464)