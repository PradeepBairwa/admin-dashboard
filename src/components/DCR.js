import React, { useEffect, useRef, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function DCR() {
  const [newData,setNewData]=useState([]);
  const [pageNo,setPageNo]=useState(1);
  const [mainValue,setMainValue]=useState();
  const [sizePerPage,setSizePerPage]=useState('1000');
  const previousPageIndex = useRef();
  let data="";
  const products = [
    { id: 1, name: 'Champ', animal: 'Monkey' },
    { id: 2, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 3, name: 'Alice', animal: 'Giraffe' },
    { id: 4, name: 'Foster', animal: 'Tiger' },
    { id: 5, name: 'Tracy', animal: 'Bear' },
    { id: 6, name: 'Joesph', animal: 'Lion' },
    { id: 7, name: 'Tania', animal: 'Deer' },
    { id: 8, name: 'Chelsea', animal: 'Tiger' },
    { id: 9, name: 'Benedict', animal: 'Tiger' },
    { id: 10, name: 'Chadd', animal: 'Lion' },
    { id: 11, name: 'Delphine', animal: 'Deer' },
    { id: 12, name: 'Elinore', animal: 'Bear' },
    { id: 13, name: 'Stokes', animal: 'Tiger' },
    { id: 14, name: 'Tamara', animal: 'Lion' },
    { id: 15, name: 'Zackery', animal: 'Bear' },
    
  ];
  const products2 = [
    { id: 16, name: 'George', animal: 'Monkey' },
    { id: 17, name: 'Jeffrey', animal: 'Giraffe' },
    { id: 18, name: 'Alice', animal: 'Giraffe' },
    { id: 19, name: 'Foster', animal: 'Tiger' },
    { id: 20, name: 'Tracy', animal: 'Bear' },
    { id: 21, name: 'Joesph', animal: 'Lion' },
    { id: 22, name: 'Tania', animal: 'Deer' },
    { id: 23, name: 'Chelsea', animal: 'Tiger' },
    { id: 24, name: 'Benedict', animal: 'Tiger' },
    { id: 25, name: 'Chadd', animal: 'Lion' },
    { id: 26, name: 'Delphine', animal: 'Deer' },
    { id: 27, name: 'Elinore', animal: 'Bear' },
    { id: 28, name: 'Stokes', animal: 'Tiger' },
    { id: 29, name: 'Tamara', animal: 'Lion' },
    { id: 30, name: 'Zackery', animal: 'Bear' },
    { id: 31, name: 'Zackery', animal: 'Bear' },
    { id: 32, name: 'Joesph', animal: 'Lion' },
    { id: 33, name: 'Tania', animal: 'Deer' },
    { id: 34, name: 'Chelsea', animal: 'Tiger' },
    { id: 35, name: 'Benedict', animal: 'Tiger' },
    { id: 36, name: 'Chadd', animal: 'Lion' },
    { id: 37, name: 'Delphine', animal: 'Deer' },
    { id: 38, name: 'Elinore', animal: 'Bear' },
    { id: 39, name: 'Stokes', animal: 'Tiger' },
    { id: 40, name: 'Tamara', animal: 'Lion' },
    { id: 41, name: 'Zackery', animal: 'Bear' },
    { id: 42, name: 'Zackery', animal: 'Bear' },
    { id: 43, name: 'Zackery', animal: 'Bear' },
    { id: 44, name: 'Stokes', animal: 'Tiger' },
    { id: 45, name: 'Tamara', animal: 'Lion' },
    { id: 46, name: 'Zackery', animal: 'Bear' },
    { id: 47, name: 'Stokes', animal: 'Tiger' },
    { id: 48, name: 'Tamara', animal: 'Lion' },
    { id: 49, name: 'Stokes', animal: 'Tiger' },
    { id: 50, name: 'Tamara', animal: 'Lion' },
    { id: 51, name: 'Tamara', animal: 'Lion' },
    
  ];
  useEffect(()=>{
    setNewData(products);
  },[])
  // setNewData(products2);
 data=products;
 

  function apiCall(){
    console.log("Page No inside api call : "+pageNo);
    alert("Page No"+pageNo);
    //  data=products.concat(...products2);
    data=[].concat(data,products2);
    // alert("Data"+JSON.stringify(data));
    setNewData(data);
    // console.log("Data : "+JSON.stringify(data));
    alert("PageNo : "+pageNo+" Size per Page :"+sizePerPage);
  
  }
  


  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'animal', text: 'Animal', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'id',
    order: 'asce'
  }];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      previousPageIndex.current=page;
      alert("Previous Value : "+previousPageIndex.current +" Cuurent Value : "+page)
      console.log("onPageChange");
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
      console.log("length : "+(newData.length/sizePerPage));
      
      const value=Math.trunc( newData.length/sizePerPage );
      console.log("value :",value +" page :"+page);
      const newValue=value===(newData.length/sizePerPage)?value:value+1;
      setMainValue(newValue);
      // alert("Main value :"+mainValue);
      previousPageIndex.current=page;
      console.log("Previous Value : "+previousPageIndex +" Cuurent Value : "+page)
      if(mainValue === page){
        alert("mainValue :"+mainValue+"Page :"+page);
        console.log("Inside If.....");
        // setNewData(products2);
        setPageNo(2);
        // setSizePerPage(sizePerPage);
        console.log("Page No: "+pageNo);
        apiCall();
      }
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("onSizePerPageChange");
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
      if(page>=newData.length){
        apiCall();
      }
    }
    
  });
  // console.log("Data : "+JSON.stringify(data));
  return (
    <div style={{textAlign:'center'}}>
      <h1>Wellcome to The DCR  </h1>
      <div className="App">
      <h3>DCR Requests</h3>

      <BootstrapTable bootstrap4 keyField='id' data={newData} columns={columns} defaultSorted={defaultSorted} pagination={pagination} />
    </div>

    </div>
  )
}

export default DCR
