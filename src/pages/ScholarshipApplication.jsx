import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } })
}

const FORMSPREE_URL = 'https://formspree.io/f/mvgrqlpo'

const ScholarshipApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [documents, setDocuments] = useState({
    document1: null,
    document2: null
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const handleFileChange = (field, file) => {
    setDocuments(prev => ({
      ...prev,
      [field]: file
    }))
  }

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
      <div className="section-padding bg-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Başvurunuz Başarıyla Alındı!
            </h2>
            <p className="text-gray-600 mb-6">
              Burs başvurunuz başarıyla iletildi. Başvurunuz incelendikten sonra size e-posta yoluyla bilgi verilecektir.
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
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Burs Başvuru Formu
          </h1>
          <p className="text-xl text-gray-600">
            Burs başvurunuzu yapmak için aşağıdaki formu doldurun ve gerekli belgeleri yükleyin.
          </p>
        </div>

        {/* Kimler Başvurabilir? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Kimler Başvurabilir?</h2>
          <div className="card mb-6">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Jeoloji Mühendisliği, Jeofizik Mühendisliği, Petrol ve Doğalgaz Mühendisliği bölümlerinde okuyan ihtiyaç sahibi öğrenciler</li>
              <li>Anne veya babası vefat etmiş ve ihtiyaç sahibi TPAO personelinin çocukları</li>
            </ul>
            <div className="mt-4 text-primary-700 font-semibold">Burs miktarı: 600 TL</div>
          </div>
        </div>

        {/* Önemli Notlar */}
        <div className="mb-8">
          <motion.div className="card bg-yellow-50 border border-yellow-200" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Önemli Notlar
                </h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• Ön değerlendirme formdaki bilgilere göre yapılır. Belgeler ve not çizelgesi daha sonra istenecektir.</li>
                  <li>• Başarısız olan öğrenciler burstan yararlanamaz.</li>
                  <li>• Adli sicil kaydı da istenecektir.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Kişisel Bilgiler */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Burs Başvuru Bilgileri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">İsim Soyisim *</label>
                  <input type="text" {...register('fullName', { required: 'İsim Soyisim zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.fullName && (<p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta *</label>
                  <input type="email" {...register('email', { required: 'E-posta zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Okul *</label>
                  <input type="text" {...register('school', { required: 'Okul zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.school && (<p className="text-red-500 text-sm mt-1">{errors.school.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bölüm *</label>
                  <input type="text" {...register('department', { required: 'Bölüm zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.department && (<p className="text-red-500 text-sm mt-1">{errors.department.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sınıf *</label>
                  <input type="text" {...register('grade', { required: 'Sınıf zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.grade && (<p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">TPAO'da çalışan/çalışmış Anne veya Baba *</label>
                  <input type="text" {...register('tpaoParent', { required: 'Bu alan zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.tpaoParent && (<p className="text-red-500 text-sm mt-1">{errors.tpaoParent.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konaklama Durumu *</label>
                  <input type="text" {...register('accommodation', { required: 'Konaklama durumu zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.accommodation && (<p className="text-red-500 text-sm mt-1">{errors.accommodation.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ailenin Konaklama Durumu *</label>
                  <input type="text" {...register('familyAccommodation', { required: 'Ailenin konaklama durumu zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.familyAccommodation && (<p className="text-red-500 text-sm mt-1">{errors.familyAccommodation.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kardeş Sayısı *</label>
                  <input type="number" min="0" {...register('siblings', { required: 'Kardeş sayısı zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.siblings && (<p className="text-red-500 text-sm mt-1">{errors.siblings.message}</p>)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ailenin toplam aylık geliri *</label>
                  <input type="text" {...register('familyIncome', { required: 'Ailenin toplam aylık geliri zorunludur' })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                  {errors.familyIncome && (<p className="text-red-500 text-sm mt-1">{errors.familyIncome.message}</p>)}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Diğer (Belirtmek istediğiniz diğer konular)</label>
                  <textarea {...register('other')} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                </div>
              </div>
            </div>

            {/* Eğitim Bilgileri */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Eğitim Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Üniversite *
                  </label>
                  <input
                    type="text"
                    {...register('university', { required: 'Üniversite alanı zorunludur' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  {errors.university && (
                    <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bölüm *
                  </label>
                  <input
                    type="text"
                    {...register('department', { required: 'Bölüm alanı zorunludur' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  {errors.department && (
                    <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sınıf *
                  </label>
                  <select
                    {...register('grade', { required: 'Sınıf seçimi zorunludur' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Sınıf seçin</option>
                    <option value="1">1. Sınıf</option>
                    <option value="2">2. Sınıf</option>
                    <option value="3">3. Sınıf</option>
                    <option value="4">4. Sınıf</option>
                    <option value="5">5. Sınıf</option>
                    <option value="6">6. Sınıf</option>
                  </select>
                  {errors.grade && (
                    <p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Genel Not Ortalaması *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="4"
                    {...register('gpa', { 
                      required: 'GNO zorunludur',
                      min: { value: 0, message: 'GNO 0\'dan küçük olamaz' },
                      max: { value: 4, message: 'GNO 4\'ten büyük olamaz' }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  {errors.gpa && (
                    <p className="text-red-500 text-sm mt-1">{errors.gpa.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Aile Bilgileri */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Aile Bilgileri
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Baba Adı
                  </label>
                  <input
                    type="text"
                    {...register('fatherName')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anne Adı
                  </label>
                  <input
                    type="text"
                    {...register('motherName')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aile Gelir Durumu *
                  </label>
                  <select
                    {...register('familyIncome', { required: 'Aile gelir durumu zorunludur' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Gelir durumu seçin</option>
                    <option value="low">Düşük Gelir</option>
                    <option value="medium">Orta Gelir</option>
                    <option value="high">Yüksek Gelir</option>
                  </select>
                  {errors.familyIncome && (
                    <p className="text-red-500 text-sm mt-1">{errors.familyIncome.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kardeş Sayısı
                  </label>
                  <input
                    type="number"
                    min="0"
                    {...register('siblings')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Belge Yükleme */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Gerekli Belgeler
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Belge 1: Öğrenci Belgesi (PDF) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange('document1', e.target.files[0])}
                      className="hidden"
                      id="document1"
                    />
                    <label htmlFor="document1" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {documents.document1 ? documents.document1.name : 'Dosya seçmek için tıklayın'}
                      </p>
                    </label>
                  </div>
                  {documents.document1 && (
                    <div className="flex items-center mt-2 text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Dosya yüklendi: {documents.document1.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Belge 2: Transkript (PDF) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange('document2', e.target.files[0])}
                      className="hidden"
                      id="document2"
                    />
                    <label htmlFor="document2" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {documents.document2 ? documents.document2.name : 'Dosya seçmek için tıklayın'}
                      </p>
                    </label>
                  </div>
                  {documents.document2 && (
                    <div className="flex items-center mt-2 text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Dosya yüklendi: {documents.document2.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Ek Bilgiler */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ek Bilgiler
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Burs Başvurusu Gerekçesi
                </label>
                <textarea
                  {...register('reason')}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Burs başvurusu yapma gerekçenizi açıklayın..."
                />
              </div>
            </div>

            {/* Gönder Butonu */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || !documents.document1 || !documents.document2}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" />
                    Başvuruyu Gönder
                  </>
                )}
              </button>
            </div>

            {/* Uyarı Mesajı */}
            {(!documents.document1 || !documents.document2) && (
              <div className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-800">
                  Başvurunuzu gönderebilmek için her iki belgeyi de yüklemeniz gerekmektedir.
                </span>
              </div>
            )}

          {submitError && (
              <div className="flex items-center text-red-600 mt-2">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>{submitError}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ScholarshipApplication 