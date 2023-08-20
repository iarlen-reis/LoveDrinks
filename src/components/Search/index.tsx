'use client'

import { SearchIcon } from 'lucide-react'
import styles from './Search.module.css'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Fade } from 'react-awesome-reveal'

interface IFormProps {
  search: string
}
const Search = () => {
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormProps>()

  const handleSearch = (data: IFormProps) => {
    if (!data.search.trim()) return

    router.push(`/search?q=${data.search}`)
  }

  return (
    <Fade direction="right" delay={100} triggerOnce>
      <form onSubmit={handleSubmit(handleSearch)} className={styles.form}>
        <input
          type="text"
          placeholder="Find drinks..."
          autoComplete="off"
          {...register('search', {
            required: true,
          })}
        />
        <button type="submit">
          <SearchIcon role="img" />
        </button>
        <span>{errors.search && 'Campo obrigatório.'}</span>
      </form>
    </Fade>
  )
}

export default Search
