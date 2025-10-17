'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Flower, Gift, Star, Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Instagram, MessageCircle, Palette, User } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Flower className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Yasmin Flores</h1>
                <p className="text-gray-600 text-sm">Flores que falam por você</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Test Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teste - Site Funcionando!
          </h1>
          <p className="text-lg text-gray-600">
            O layout foi reformulado com sucesso.
          </p>
        </div>
      </main>
    </div>
  );
}