import React from "react";
import SinIn from "../styles/SinIn.module.css";
import Link from "next/link";

function Sin_up() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://hyper10.net/api/contact-us", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <form className={SinIn.container} onSubmit={handleSubmit}>
      <h1>إنشاء حساب</h1>

      <div className={SinIn.name + " block"}>
        <div>
          <input
            placeholder="الاسم"
            id="frm-first"
            type="text"
            name="name"
            autoComplete="given-name"
            required
          />
        </div>
      </div>

      <div className={SinIn.phone + " block"}>
        <input
          placeholder="رقم الهاتف"
          id="frm-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>

      <div className={SinIn.password + " block"}>
        <input
          placeholder="كلمه المرور"
          type="password"
          name="password"
          autoComplete="password"
          required
        />
      </div>

      <div className={SinIn.password + " block"}>
        <input
          placeholder="تاكيد كلمه المرور"
          type="password"
          name="password"
          autoComplete="password"
          required
        />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          الموافقة علي الشروط والأحكام
          <Link href="/addNewProduct"> الشروط والأحكام</Link>
        </label>
      </div>

      <div className={SinIn.button + " block"}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Sin_up;
