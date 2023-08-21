import React, { memo, useState } from 'react';

import { Button, InputNumber } from 'antd';
import './index.less'

import { getCurDate } from '@/utils'

const Index = memo(props => {

  const { onSubmit = () => {} } = props

  const [curDate] = useState(getCurDate())
  const [value, setValue] = useState(5)
  
  const onChange = (value) => {
    setValue(value)
  };

  return (
    <div className='submit-form'>
      <div className='form'>
        <div className='date'>
          <span>日期：</span>
          <span>{curDate}</span>
        </div>
        <div>
          <span>情绪值：</span>
          <InputNumber min={1} max={10} defaultValue={value} onChange={onChange} />
        </div>
      </div>
      <Button type="primary" className='submit' onClick={() => onSubmit(value)}>提交</Button>
    </div>
  )
})

export default Index;