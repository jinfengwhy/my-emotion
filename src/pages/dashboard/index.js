import { useEffect, useState } from 'react';

import { message } from 'antd';
import OneWeek from '@/components/oneweek'
import SubmitForm from '@/components/submitform';
import './index.less'

import { getAll, postOne, putOne } from '@/service/modules/mood'
import { getCurDate } from '@/utils'

function Index() {
  const [curDate] = useState(getCurDate())
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
    const isFind = data.find(item => item.date === curDate)
    if (isFind) { // 更新
      putOne(isFind.id, {...isFind, emotion: value, remark})
        .then(res => {
          message.success('更新成功~')
        })
        .catch(err => {
          message.success('更新失败~')
        })
    }
    else { // 新增
      const maxIdItem = data.reduce((prev, current) => (prev.id > current.id) ? prev : current, {id: 0})
      postOne({id: maxIdItem.id + 1, date: curDate, emotion: value, remark})
        .then(res => {
          message.success('新增成功~')
        })
        .catch(err => {
          message.success('新增失败~')
        })
    }
  }

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
