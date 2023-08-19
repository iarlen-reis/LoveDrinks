'use client'
import { SearchIcon } from 'lucide-react'
import styles from './Search.module.css'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

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
    router.push(`/search?q=${data.search}`)
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)} className={styles.form}>
      <input
        type="text"
        placeholder="Encontrar drinks"
        {...register('search', {
          required: true,
        })}
        aria-errormessage="search"
      />
      <button>
        <SearchIcon />
      </button>
      <span>{errors.search && 'Campo obrigatório.'}</span>
    </form>
  )
}

export default Search
