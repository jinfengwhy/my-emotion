import { useEffect, useState } from 'react';

import OneWeek from '@/components/oneweek'
import SubmitForm from '@/components/submitform';
import './index.less'

import { getAll, postOne, putOne } from '@/service/modules/mood'

function Index() {
  const [data, setData] = useState([])

  // 获取所有数据（倒序是为了始终让最新的在最前面）
  useEffect(() => {
    getAll().then(res => {
      setData(res.reverse())
    })
  }, [])

  // 每7个一组
  const groupData = data.reduce((acc, cur, idx) => {
    if (idx % 7 === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
  }, []).map(group => group.sort((a, b) => a.id - b.id))

  // 提交
  const onSubmit = (value, remark) => {
    console.log(`---why111: `, value, remark);
  }

  // const one = {
  //   "id": 89,
  //   "date": "23-08-20（周日）",
  //   "emotion": 6,
  //   "remark": "今天要宣讲了"
  // }

  // postOne(one).then(res => {
  //   console.log(`---why222: `, res);
  // })

  // putOne(89, {...one, remark: '人活一世，到底图个啥哟，你觉得刻意练习游泳吗'}).then(res => {
  //   console.log(`---why333: `, res);
  // })

  return (
    <div className="pages-dashboard">
      <SubmitForm onSubmit={onSubmit} />
      {
        groupData.map((group, idx) => (
          <OneWeek key={idx} data={group} />
        ))
      }
    </div>
  );
}

export default Index;
