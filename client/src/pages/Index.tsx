import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Users, Target, Zap, GraduationCap, TrendingUp, MessageSquare, BarChart, Brain, Sparkles, CheckCircle, XCircle } from "lucide-react";
import karthikPhoto from "@assets/karthikeyan_profile.jpeg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState('teachers');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Centum AI
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#team" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={() => window.open('https://centumai.in', '_blank')}>
              Try Mira
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforming Learning with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Agentic AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience AI that thinks, reasons, and adapts - delivering personalized education solutions 
              that go far beyond traditional LLM chatbots, Google search or solution modules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3" onClick={() => window.open('https://centumai.in', '_blank')}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for Every Stakeholder
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our agentic AI platform provides comprehensive solutions for educators, students, and parents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lesson Generation</h3>
                <p className="text-gray-600">
                  AI-powered lesson plans tailored to curriculum standards and student needs
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exam Generation</h3>
                <p className="text-gray-600">
                  Create comprehensive assessments with varying difficulty levels instantly
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">In-Context Doubt Solving</h3>
                <p className="text-gray-600">
                  Real-time, contextual assistance that understands student queries deeply
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Reporting</h3>
                <p className="text-gray-600">
                  AI-driven insights for parents to track and understand student progress
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Mira Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Mira
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover agentic AI that does more than answer—it thinks, reasons, and adapts to each learner for a uniquely personalized educational journey.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-6xl w-full">
              <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Features for Students and Teachers</h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Specialized interfaces designed to revolutionize how educators teach and students learn, 
                    powered by advanced agentic AI that thinks, reasons, and adapts.
                  </p>
                  
                  {/* Toggle Buttons */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 rounded-lg p-1 flex">
                      <button
                        onClick={() => setActiveTab('teachers')}
                        className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                          activeTab === 'teachers'
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        For Teachers
                      </button>
                      <button
                        onClick={() => setActiveTab('students')}
                        className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                          activeTab === 'students'
                            ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        For Students
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="min-h-[400px]">
                  {/* Teacher Dashboard */}
                  {activeTab === 'teachers' && (
                    <div className="animate-fade-in">
                      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100">
                        <div className="text-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">Teacher Dashboard</h4>
                          <p className="text-gray-600">Empower educators with AI-driven teaching tools</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-xl">📝</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="text-lg font-bold text-blue-600 mb-1">Intelligent Exam Generator</h5>
                                <p className="text-gray-600 mb-2 text-sm">
                                  Creates high-quality, board-aligned exams with precision. Customize question types, 
                                  difficulty levels, and special requirements.
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">Board Aligned</span>
                                  <span className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded">Custom Difficulty</span>
                                  <span className="bg-green-50 text-green-600 text-xs px-2 py-1 rounded">Multiple Formats</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-xl">📚</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="text-lg font-bold text-purple-600 mb-1">Comprehensive Lesson Generator</h5>
                                <p className="text-gray-600 mb-2 text-sm">
                                  Generates extensive lesson plans with problem-solving frameworks, takeaway problems, 
                                  importance ratings, and page references.
                                </p>
                                <div className="space-y-1">
                                  <div className="flex items-center text-xs text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                                    Problem-solving frameworks
                                  </div>
                                  <div className="flex items-center text-xs text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                                    Takeaway problems for practice
                                  </div>
                                  <div className="flex items-center text-xs text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                                    Importance ratings & relevance
                                  </div>
                                  <div className="flex items-center text-xs text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                                    Page/chapter references
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Student Dashboard */}
                  {activeTab === 'students' && (
                    <div className="animate-fade-in">
                      <div className="bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-green-100">
                        <div className="text-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">Student Dashboard</h4>
                          <p className="text-gray-600">Personalized learning experience for every student</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-xl">💬</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="text-lg font-bold text-green-600 mb-1">Advanced Doubt Chat</h5>
                                <p className="text-gray-600 mb-2 text-sm">
                                  Step-by-step doubt resolution with outputs superior to ChatGPT, Google Search, or YouTube. 
                                  Get contextual, curriculum-aligned answers instantly.
                                </p>
                                <div className="bg-green-50 p-2 rounded-lg">
                                  <p className="text-xs text-green-700 font-medium">
                                    ✨ Better than traditional AI - understands your curriculum
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-50 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-xl">🎯</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="text-lg font-bold text-blue-600 mb-1">Interactive Practice Playground</h5>
                                <p className="text-gray-600 mb-2 text-sm">
                                  Evaluate answers and get mistakes corrected instantly. Click a picture of your solution 
                                  for immediate, detailed feedback and improvement suggestions.
                                </p>
                                <div className="bg-blue-50 p-2 rounded-lg">
                                  <p className="text-xs text-blue-700 font-medium">
                                    📸 Photo-based solution analysis with instant feedback
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-50 hover:shadow-lg transition-shadow md:col-span-2">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🚀</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="text-lg font-bold text-purple-600 mb-2">Enhanced Learning Tools</h5>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                                      <span className="text-sm">📋</span>
                                    </div>
                                    <div>
                                      <p className="font-medium text-gray-900">Practice Question Generator</p>
                                      <p className="text-sm text-gray-600">Unlimited targeted practice questions</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                      <span className="text-sm">📄</span>
                                    </div>
                                    <div>
                                      <p className="font-medium text-gray-900">PDF Summarizing Agent</p>
                                      <p className="text-sm text-gray-600">Teaches from any document or PDF</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                                      <span className="text-sm">🤖</span>
                                    </div>
                                    <div>
                                      <p className="font-medium text-gray-900">Intelligent Chatbot</p>
                                      <p className="text-sm text-gray-600">Answers any academic question</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* What Makes Mira Special Section */}
                <div className="mt-16 max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-purple-600 mr-3" />
                      What Makes Mira Special?
                    </h3>
                    <p className="text-xl text-gray-600">
                      Discover the unique advantages that set Mira apart from traditional educational tools
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-lg mb-3 text-gray-900">Curriculum-Aligned Guidance</h4>
                      <p className="text-gray-600">
                        Mira ensures every response is tailored to your specific curriculum. Students can focus on learning, 
                        while Mira delivers targeted solutions and resources directly relevant to their coursework—no extra searching required.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-lg mb-3 text-gray-900">Reasoning & Planning</h4>
                      <p className="text-gray-600">
                        Mira can break down complex problems, create step-by-step solutions, and generate comprehensive 
                        lesson plans that align with curriculum standards.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      </div>
                      <h4 className="font-semibold text-lg mb-3 text-gray-900">Curriculum-Referenced Delivery</h4>
                      <p className="text-gray-600">
                        Mira ensures that every learning experience is grounded in the official curriculum by referencing 
                        trusted resources such as NCERT textbooks, question banks, and model papers. Instead of students 
                        spending time searching for reliable materials, Mira automatically pulls from these authoritative sources.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Future of Education?</h4>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      Transform your learning experience with Mira's agentic AI that understands, adapts, and delivers personalized education.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3" onClick={() => window.open('https://centumai.in', '_blank')}>
                        Start Free Trial
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 border-purple-200 hover:bg-purple-50">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mira vs ChatGPT Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mira Over Traditional AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference between generic AI responses and Mira's contextual, educational expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ChatGPT Response */}
            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Traditional AI Response</h3>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">Student Question: "I don't understand quadratic equations"</p>
                  <div className="bg-white rounded p-3 border-l-4 border-red-400">
                    <p className="text-sm text-gray-700">
                      "A quadratic equation is a polynomial equation of degree 2. The standard form is ax² + bx + c = 0. 
                      You can solve it using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a."
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Generic, one-size-fits-all response</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">No context about student's grade level</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Missing interactive examples</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">No follow-up learning path</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mira Response */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Mira's Response</h3>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 font-medium mb-2">Student Question: "I don't understand quadratic equations"</p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded p-3 border-l-4 border-green-400">
                    <p className="text-sm text-gray-700">
                      "I see you're working on quadratic equations! Let me help you understand this step by step. 
                      Think of it like throwing a ball - the path it takes is actually a quadratic equation! 
                      Let's start with a simple example: x² = 9. Can you think of what numbers when multiplied by themselves give 9? 
                      I'll create a visual guide and practice problems just for your grade level."
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Contextual, grade-appropriate explanation</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Real-world analogies and examples</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Interactive problem-solving approach</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Personalized learning pathway</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Experience the difference that true agentic AI can make in education
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3" onClick={() => window.open('https://centumai.in', '_blank')}>
              Try Mira Today
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Centum AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our agentic AI transforms the educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <iframe
                  src="https://drive.google.com/file/d/1KO4utw0gOVWTQDdk-Vs5kSS45q6f7saO/preview"
                  title="Teacher Demo Video"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Educators</h3>
                <p className="text-gray-600">
                  Discover how teachers can create lessons and exams in minutes with our AI
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <iframe
                  src="https://drive.google.com/file/d/1bh5-yMLprrbrtY77pYC-Mj6XS9pkyef2/preview"
                  title="Student Demo Video"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Students</h3>
                <p className="text-gray-600">
                  See how students get instant, contextual help that adapts to their learning style
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Founding Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate educators and technologists working to transform learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src="/lovable-uploads/5dc9add3-e133-43e4-9ecf-2e7ae116136d.png" 
                  alt="Aryan Goyal" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Aryan Goyal</h3>
                <p className="text-gray-600 mb-4">IIT Bombay</p>
                <p className="text-sm text-gray-500">
                  Leading the development of our cutting-edge agentic AI platform with deep learning expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img 
                  src={karthikPhoto} 
                  alt="Karthikeyan Jaganathan" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Karthikeyan Jaganathan</h3>
                <p className="text-gray-600 mb-4">IIT Bombay</p>
                <p className="text-sm text-gray-500">
                  Architecting full-stack agentic AI systems with deep learning backends and modular, autonomous agent control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform education with AI? Let's start the conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">aryan@centumai.in</p>
                  <p className="text-gray-600">karthikiit13@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 84277 28042</p>
                  <p className="text-gray-600">+91 90081 32066</p>
                </div>
                
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={() => window.open('https://centumai.in', '_blank')}>
                    Try Mira Now
                  </Button>
                  
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Centum AI
            </h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing education through agentic AI technology
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              © 2024 Centum AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
