import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, ExternalLink } from 'lucide-react';
import { profile } from '@/data/portfolio';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Hi Himanshu,\n\n${data.message}\n\nBest regards,\n${data.name}\n${data.email}`
    );
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_self');
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-navy-500/20 text-navy-400 flex items-center justify-center mx-auto mb-4">
          <ExternalLink className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-surface-100 mb-2">
          Opening your email client...
        </h3>
        <p className="text-sm text-surface-400 mb-4 max-w-sm mx-auto">
          Your email application should open with a pre-filled draft. Complete the send from there.
          If it didn't open, you can email me directly at{' '}
          <a href={`mailto:${profile.email}`} className="text-navy-400 hover:underline">
            {profile.email}
          </a>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-navy-400 hover:text-navy-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <p className="text-xs text-surface-500 mb-2">
        This form opens your email application with a pre-filled draft. The message is sent from your own email client.
      </p>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-surface-300 mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          {...register('name')}
          className="w-full px-3.5 py-2.5 bg-surface-800/50 border border-surface-700/50 rounded-lg text-sm text-surface-200 placeholder:text-surface-600 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-surface-300 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          {...register('email')}
          className="w-full px-3.5 py-2.5 bg-surface-800/50 border border-surface-700/50 rounded-lg text-sm text-surface-200 placeholder:text-surface-600 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-surface-300 mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          {...register('subject')}
          className="w-full px-3.5 py-2.5 bg-surface-800/50 border border-surface-700/50 rounded-lg text-sm text-surface-200 placeholder:text-surface-600 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-colors"
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-surface-300 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register('message')}
          className="w-full px-3.5 py-2.5 bg-surface-800/50 border border-surface-700/50 rounded-lg text-sm text-surface-200 placeholder:text-surface-600 focus:border-navy-500 focus:ring-1 focus:ring-navy-500 outline-none transition-colors resize-none"
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-navy-600 hover:bg-navy-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
      >
        <Send className="w-4 h-4" />
        Open in Email Client
      </button>
    </form>
  );
}
