import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ui from './../Assets/images/UI.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal(e) {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-rose-400 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Learn More
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[800px] transform overflow-hidden rounded-2xl bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                  <div className='grid grid-cols-2 items-center'>
                    <div className='text-white space-y-4 mr-5'>
                      <h2 className='text-4xl font-semibold mb-8'>How does Lorem Tool work?</h2>
                      <h4 className='text-xl'>Overview</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <div>
                      <p className='text-white text-xl -translate-y-9'>Wanna join us?</p>
                      <form className='space-y-4 text-center flex flex-col' method='GET' action="#">
                        <input className='bg-zinc-600 text-gray-300 border border-zinc-600 rounded-md focus:outline-none focus:border-rose-400 focus:border-2 placeholder-gray-300 p-1' placeholder='Name: ' />
                        <input className='bg-zinc-600 text-gray-300 border border-zinc-600 rounded-md focus:outline-none focus:border-rose-400 focus:border-2 placeholder-gray-300 p-1' placeholder='Email: ' />
                        <button className='bg-rose-400 text-white rounded-md hover:bg-indigo-400 py-1 px-2' type='submit'>Submit</button>                      
                      </form>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md hover:bg-white duration-500 ease-in-out hover:text-black px-4 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
