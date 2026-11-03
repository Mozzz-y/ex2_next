"use client";

import {
  CalendarDays,
  FileText,
  Globe,
  Heart,
  Image,
  Instagram,
  Linkedin,
  Mail,
  Pencil,
  Settings,
  Share2,
  Twitter,
  UserRound,
  Users
} from "lucide-react";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("Все посты");
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-5 py-6">

        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white font-bold">N</div>
            <span className="text-lg font-bold">NameSpace</span>
          </div>
          <button className="rounded-xl border bg-white p-3"><Settings size={19} /></button>
        </header>

        <section className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-700">СК</div>
              <div>
                <h1 className="text-3xl font-bold">Степан Кузнецов</h1>
                <p className="mt-1 text-sm text-indigo-600">@skuznet · Student</p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                  Создаю простые интерфейсы,
                  продумываю пользовательский опыт и люблю аккуратный дизайн.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm text-white"><Pencil size={16} />
                Редактировать профиль</button>
              <button className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm"><Share2 size={16} />
                Поделиться</button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t pt-6 md:grid-cols-4">
            <div className="flex items-center gap-3"><FileText className="text-indigo-600" />
            <div>
                <p className="font-bold">128</p>
                <p className="text-xs text-gray-500">Публикации</p>
            </div>
          </div>
            <div className="flex items-center gap-3"><Users className="text-indigo-600" />
            <div>
                <p className="font-bold">12.4K</p>
                <p className="text-xs text-gray-500">Подписчики</p>
              </div>
            </div>
            <div className="flex items-center gap-3"><UserRound className="text-indigo-600" />
            <div>
                <p className="font-bold">384</p>
                <p className="text-xs text-gray-500">Подписки</p>
              </div>
            </div>
            <div className="flex items-center gap-3"><Heart className="text-indigo-600" />
            <div>
                <p className="font-bold">8.7K</p>
                <p className="text-xs text-gray-500">Лайки</p>
            </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">О себе</h2>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Учусь в колледже 26Кадр на направлении информационные системы и программирование.
            </p>
            <h3 className="mt-6 font-bold">Навыки</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                UI/UX Design
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                Next.js
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                TypeScript
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                Figma
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                Branding
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                Web Design
              </span>
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Контактная информация</h2>
            <div className="mt-5 grid gap-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-semibold">skuznet09@mail.ru</p>
                </div>
              </div>
              <div className="flex items-center gap-3"><Globe className="text-gray-500" />
              <div>
                  <p className="text-xs text-gray-500">Веб-сайт</p>
                  <p className="text-sm font-semibold">skuznet.com</p>
              </div>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Социальные сети</p>
                  <p className="text-sm font-semibold">@skuznet</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays className="text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">Дата регистрации</p>
                  <p className="text-sm font-semibold">12 марта 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border bg-white shadow-sm">
          <div className="flex flex-wrap gap-2 border-b p-3">
            <button
              onClick={() => setTab("Все посты")}
              className={`rounded-xl px-4 py-2 text-sm ${
                tab === "Все посты"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100"}`}>Все посты</button>
            <button
              onClick={() => setTab("Медиа")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${
                tab === "Медиа"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100"}`}>
              <Image size={16} />Медиа</button>
            <button
              onClick={() => setTab("Документы")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${
                tab === "Документы"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100"
              }`}>
              <FileText size={16} />Документы</button>
            <button
              onClick={() => setTab("Избранное")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm ${
                tab === "Избранное"
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100"}`}>
                <Heart size={16} />Избранное</button>
          </div>
          <div className="p-10 text-center">
            <h3 className="text-lg font-bold">{tab}</h3>
            <p className="mt-2 text-sm text-gray-500">Здесь будет отображаться содержимое выбранного раздела.</p>
          </div>
        </section>
        <footer className="mt-10 border-t py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 font-semibold">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-xs text-white">N</div>
                <span>© 2026 NameSpace</span>
              </div>
              <div className="hidden h-5 w-px bg-gray-200 md:block" />
              <div className="flex gap-5 text-sm text-gray-500">
                <a href="#">О нас</a>
                <a href="#">Поддержка</a>
                <a href="#">Блог</a>
                <a href="#">Вакансии</a>
              </div>
              <div className="hidden h-5 w-px bg-gray-200 md:block" />
              <div className="flex gap-5 text-sm text-gray-400">
                <a href="#">Конфиденциальность</a>
                <a href="#">Условия использования</a>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="rounded-lg border p-2 text-gray-500">
                <Twitter size={17} /></a>
              <a href="#" className="rounded-lg border p-2 text-gray-500">
                <Instagram size={17} /></a>
              <a href="#" className="rounded-lg border p-2 text-gray-500">
                <Linkedin size={17} /></a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
