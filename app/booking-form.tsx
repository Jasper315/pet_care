"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

function getTomorrowAtNineThirty() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(9, 30, 0, 0);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function BookingForm() {
  const [defaultDateTime, setDefaultDateTime] = useState(getTomorrowAtNineThirty);
  const [toastVisible, setToastVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!toastVisible) {
      return;
    }

    const timeout = window.setTimeout(() => setToastVisible(false), 3200);
    return () => window.clearTimeout(timeout);
  }, [toastVisible]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setToastVisible(true);
    formRef.current?.reset();
    setDefaultDateTime(getTomorrowAtNineThirty());
  }

  return (
    <>
      <form className="booking-form" id="bookingForm" ref={formRef} onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">联系人</label>
          <input id="name" name="name" type="text" placeholder="例如：林小姐" required />
        </div>
        <div className="field">
          <label htmlFor="phone">手机号</label>
          <input id="phone" name="phone" type="tel" placeholder="用于确认档期" required />
        </div>
        <div className="field">
          <label htmlFor="pet">宠物信息</label>
          <input id="pet" name="pet" type="text" placeholder="例如：比熊，5kg，2岁" required />
        </div>
        <div className="field">
          <label htmlFor="service">预约服务</label>
          <select id="service" name="service" required defaultValue="">
            <option value="">请选择</option>
            <option>轻盈洗护</option>
            <option>蓬松全套</option>
            <option>皮毛 SPA</option>
            <option>敏感宠安抚洗护</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="date">期望日期时间</label>
          <input id="date" name="date" type="datetime-local" required min={defaultDateTime} defaultValue={defaultDateTime} />
        </div>
        <div className="field">
          <label htmlFor="time">期望时段</label>
          <select id="time" name="time" required defaultValue="">
            <option value="">请选择</option>
            <option>10:00 - 12:00</option>
            <option>12:00 - 15:00</option>
            <option>15:00 - 18:00</option>
            <option>18:00 - 20:30</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="notes">特别说明</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="是否怕吹风、是否有皮肤敏感、是否需要造型参考"
          />
        </div>
        <div className="field full">
          <button className="button" type="submit">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              <path d="M22 2 11 13" />
            </svg>
            提交预约
          </button>
          <p className="form-note">这是页面演示表单，不会真的发送数据。</p>
        </div>
      </form>

      <div className={`toast${toastVisible ? " show" : ""}`} role="status" aria-live="polite">
        预约信息已记录，前台会尽快与您确认档期。
      </div>
    </>
  );
}
