import React from 'react'

const MailingList = () => {
  return (
    <div className="bg-gray-200 p-4 mx-auto w-11/12">
      <h2 className="text-lg font-bold mb-4 text-center">
      Stay in the loop - Get our latest articles, sales, and more!
      </h2>
      <div className="flex flex-wrap justify-center">
      <a
              href="#"
              className="font-large text-base transition-colors duration-200 hover:text-gray-500 hover:underline"
            >
              Join our Mailing List
            </a>
      </div>
    </div>
  )
}

export default MailingList