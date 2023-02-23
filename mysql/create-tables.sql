create table transactions (
	id bigint unsigned unique ,
	createdat datetime default current_timestamp() ,
	updatedat datetime  default null on update current_timestamp() ,
	txhash varchar(80) ,
       status tinyint comment '0:pending 1: success, 2: fail' ,	
	txcreator varchar(80 ) ,
	txvalue varchar(20),
	txreceiver varchar(80),
	timelapse varchar(20 ),
	primary key(id)
) ;
