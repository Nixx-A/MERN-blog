export function ExtraUserInfo ({ label, text }) {
  return (
    <>
      {text &&
        <>
          <h3 className='font-semibold text-lg border-b mt-4'>{label}</h3>
          <p className='mt-2'>{text}</p>
        </>
      }
    </>

  )
}
