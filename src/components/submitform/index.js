import React, { memo, useEffect, useState } from 'react';

import { Button, InputNumber, Input } from 'antd';
import './index.less'

import { getCurDate } from '@/utils'

const { TextArea } = Input;

const Index = memo(props => {

  const { onSubmit = () => {}, form = {} } = props

  const [curDate] = useState(getCurDate())
  const [value, setValue] = useState(5)
  const [text, setText] = useState('')

  useEffect(() => {
    if (form.value) setValue(form.value)
    if (form.text) setText(form.text)
  }, [form])
  
  
  const onNumberChange = (value) => {
    setValue(value)
  };

  const onTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='submit-form'>
      <div className='form'>
        <div className='date'>
          <span>日期：</span>
          <span>{curDate}</span>
        </div>
        <div className='input-value'>
          <span>情绪值：</span>
          <InputNumber min={1} max={10} value={value} onChange={onNumberChange} />
        </div>
      </div>
      <div className='remark-wrapper'>
        <span className='bak'>备注：</span>
        <TextArea
          className='remark'
          value={text}
          onChange={onTextChange}
          placeholder="今天有想记录的事情吗？"
        />
      </div>
      <Button type="primary" className='submit' onClick={() => onSubmit(value, text)}>提交</Button>
    </div>
  )
})

export default Index;