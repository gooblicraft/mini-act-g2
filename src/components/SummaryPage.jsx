import React from 'react';
import Header from './Header';
import bgSummary from '../assets/bg_summary.png';

const SummaryPage = ({ values, onBack }) => {
  const {
    name,
    studentId,
    email,
    course,
    section,
    lrn,
    phoneNum,
    age,
    sex,
    height,
    weight,
    nationality,
    dateBirth,
    studentType,
    placeBirth,
    religion,
    address,
  } = values;

  return (
    <div
      className='relative min-h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bgSummary})` }}
    >
      <div className='absolute inset-0 bg-black/35'></div>

      <div className='relative z-10'>
      <Header text='Submitted Student Details' bgColor='#1e3a8a' textColor='#ffffff' />
      <div className='px-6 pt-6'>
        <div className='mx-auto mb-4 w-full max-w-[1320px] flex items-center justify-start gap-6'>
        <div className='flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 text-slate-700 shadow-sm'>
            <svg viewBox='0 0 24 24' className='h-12 w-12' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
              <circle cx='12' cy='8' r='4'></circle>
              <path d='M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6'></path>
            </svg>
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-3xl font-extrabold text-white'>{name}</p>
            <p className='text-xl font-normal text-white'>{course}-{section}</p>
          </div>
        </div>

        <div className='mx-auto w-full max-w-[1320px] rounded-xl bg-white/85 p-6 backdrop-blur-sm overflow-x-auto'>
          <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-row gap-5'>
              <div>
                <label className='block mb-1 font-bold'>Name: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={name} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Student ID: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={studentId} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Email: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={email} readOnly></input>
              </div>
            </div>

            <div className='flex flex-row gap-5'>
              <div>
                <label className='block mb-1 font-bold'>Course: </label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={course} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Section: </label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={section} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Learner's Reference Number: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={lrn} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Phone Number: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={phoneNum} readOnly></input>
              </div>
            </div>

            <div className='flex flex-row gap-5'>
              <div>
                <label className='block mb-1 font-bold'>Age: </label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={age} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Sex: </label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={sex ? 'Male' : 'Female'} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Height: </label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={height ? `${height} cm` : ''} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Weight: </label>
                <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={weight ? `${weight} kg` : ''} readOnly></input>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Nationality: </label>
                <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={nationality} readOnly></input>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='flex flex-row gap-5'>
                <div>
                  <label className='block mb-1 font-bold'>DateBirth: (date)</label>
                  <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={dateBirth} readOnly></input>
                </div>

                <div>
                  <label className='block mb-1 font-bold'>Student Type: </label>
                  <input className='rounded-lg bg-neutral-300 w-[190px] px-4 py-2 h-10' type='text' value={studentType} readOnly></input>
                </div>

                <div>
                  <label className='block mb-1 font-bold'>PlaceBirth: </label>
                  <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={placeBirth} readOnly></input>
                </div>

                <div>
                  <label className='block mb-1 font-bold'>Religion: </label>
                  <input className='rounded-lg bg-neutral-300 w-[400px] px-4 py-2 h-10' type='text' value={religion} readOnly></input>
                </div>
              </div>

              <div>
                <label className='block mb-1 font-bold'>Address: </label>
                <input className='rounded-lg bg-neutral-300 w-[1240px] px-4 py-2 h-10' type='text' value={address} readOnly></input>
              </div>
            </div>
          </div>

        <div className='mt-8'>
          <button
            type='button'
            className='rounded-lg bg-slate-900 px-6 py-2 font-medium text-white shadow-lg shadow-black/25 hover:bg-slate-700'
            onClick={onBack}
          >
            Back to Form
          </button>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SummaryPage;
