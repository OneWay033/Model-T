
import AppHeader from '../AppHeader';
import Trend_child from './Trend_child';


function Page1() {
  const postList = [
    {head:'123',msg:'helo'},
    {head:'124',msg:'helo'},
    {head:'125',msg:'helo'},
    {head:'126',msg:'helo'},

  ];
  return (
    <div>
      <div>
        {/* {postList.map((value,index)=>(
          <Trend_child key= {index} text = {value.msg} title = {value.head} />
        ))} */}
      </div>
    </div>
  );
}

export default Page1;
