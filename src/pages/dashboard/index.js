
import OneWeek from '@/components/oneweek'

const data = [
  {
    id: 1,
    name: '23-08-13（周日）',
    emotion: 7,
    remark: '哈哈哈',
  },
  {
    id: 2,
    name: '23-08-14（周一）',
    emotion: 4,
    remark: '1234',
  },
  {
    id: 3,
    name: '23-08-15（周二）',
    emotion: 3,
    remark: '今天很开心，认识了一个人',
  },
  {
    id: 4,
    name: '23-08-16（周三）',
    emotion: 3,
    remark: '没有比这更悲伤的了',
  },
  {
    id: 5,
    name: '23-08-17（周四）',
    emotion: 5,
    remark: '世上的人千千万万，怎么会相同呢',
  },
  {
    id: 6,
    name: '23-08-18（周五）',
    emotion: 6,
    remark: '今天加班到10点之后了',
  },
  {
    id: 7,
    name: '23-08-19（周六）',
    emotion: 7,
    remark: '今天抢了3块钱红包',
  },
];

function Index() {
  return (
    <div className="pages-dashboard">
      <h2>情绪曲线</h2>
      <OneWeek data={data} />
    </div>
  );
}

export default Index;
