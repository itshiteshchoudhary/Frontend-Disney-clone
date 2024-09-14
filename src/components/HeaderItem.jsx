

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white flex gap-4 self-center hover:underline underline-offset-8 mb-2'>
        <Icon className='text-2xl'/>
        <h2 className="font-bold">{name}</h2>        
    </div>
  )
}

export default HeaderItem