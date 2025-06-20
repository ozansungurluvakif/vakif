import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, AlertCircle } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/mvgrqlpo'

const MembershipApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitError('')
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        setSubmitError('Başvuru gönderilemedi. Lütfen tekrar deneyin.')
      }
    } catch (err) {
      setSubmitError('Sunucuya ulaşılamıyor. Lütfen tekrar deneyin.')
    }
    setIsSubmitting(false)
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Başvurunuz Başarıyla Alındı!
            </h2>
            <p className="text-gray-600 mb-6">
              Üyelik başvurunuz başarıyla iletildi. Başvurunuz incelendikten sonra size e-posta yoluyla bilgi verilecektir.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="btn-primary"
            >
              Yeni Başvuru Yap
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 flex flex-col justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold tracking-wide text-gray-700 mb-1">
            OZAN SUNGURLU BİLİM, EĞİTİM VE YARDIM VAKFI
          </h2>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            ÜYELİK BAŞVURU FORMU
          </h1>
        </div>
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adı Soyadı *</label>
                <input type="text" {...register('name', { required: 'Adı Soyadı zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.name && (<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kurumu *</label>
                <input type="text" {...register('institution', { required: 'Kurumu zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.institution && (<p className="text-red-500 text-sm mt-1">{errors.institution.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Görevi *</label>
                <input type="text" {...register('position', { required: 'Görevi zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.position && (<p className="text-red-500 text-sm mt-1">{errors.position.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İş Adresi *</label>
                <input type="text" {...register('workAddress', { required: 'İş adresi zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.workAddress && (<p className="text-red-500 text-sm mt-1">{errors.workAddress.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ev Adresi *</label>
                <input type="text" {...register('homeAddress', { required: 'Ev adresi zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.homeAddress && (<p className="text-red-500 text-sm mt-1">{errors.homeAddress.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                <input type="text" {...register('phone', { required: 'Telefon zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.phone && (<p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                <input type="email" {...register('email', { required: 'E-posta zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tarih *</label>
                <input type="date" {...register('date', { required: 'Tarih zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                {errors.date && (<p className="text-red-500 text-sm mt-1">{errors.date.message}</p>)}
              </div>
            </div>
            {submitError && (
              <div className="flex items-center text-red-600 mt-2">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>{submitError}</span>
              </div>
            )}
            <div className="flex justify-center">
              <button type="submit" className="btn-primary px-8 py-2 rounded font-semibold" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MembershipApplication 