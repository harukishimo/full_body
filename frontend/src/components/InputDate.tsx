"use client";
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  name?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
};

const InputDateTime = ({
  name,
  value,
  onChange,
  placeholder,
  className,
}: Props) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="yyyy/MM/dd HH:mm"
      placeholderText={placeholder}
      className={className}
      name={name}
    />
  );
};

export default InputDateTime;
