/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import spainFlag from "../images/spain-flag.jpg";

type Message = {
  text: string;
  isUser?: boolean;
};

const ChatBot: React.FC = () => {
  const navigate = useNavigate();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "España",
    phone: "",
  });

  const questions = [
    { q: "¿Es usted ciudadano de España?", options: ["Sí", "No"], failIf: ["No"] },
    { q: "¿Eres migrante?", options: ["Sí", "No"], failIf: ["Sí"] },
    { q: "¿Cuántos años tienes?", options: ["18-25", "25-40", "40+"], failIf: [] },
    { q: "¿Tienes hijos menores de 18 años?", options: ["Sí", "No"], failIf: [] },
    { q: "¿Tiene una tarjeta de uno de los bancos españoles para recibir dividendos?", options: ["Sí", "No"], failIf: ["No"] },
    { q: "¿Cuál es tu área de negocio?", options: ["Trabajando para alguien", "Autónomo", "Temporalmente desempleado", "Jubilado"], failIf: [] },
  ];

  const initialBotMessages = [
    "Hola, mi nombre es María F! Soy tu gerente personal para la plataforma REVAULTNEX.",
    "¡Felicidades! Ahora tiene la oportunidad de beneficiarse de acciones de empresas españolas y extranjeras y ganar desde 300 € en las primeras semanas!",
    "Por favor, responde las siguientes preguntas para que pueda ayudarte y empezar:",
    questions[0].q,
  ];

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < initialBotMessages.length) {
        setMessages(prev => [...prev, { text: initialBotMessages[idx] }]);
        idx++;
      } else {
        setShowOptions(true);
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, showOptions]);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  const handleAnswer = (answer: string) => {
    setMessages(prev => [...prev, { text: answer, isUser: true }]);
    setShowOptions(false);
    const question = questions[currentQuestion];
    if (question.failIf.includes(answer)) {
      setMessages(prev => [...prev, { text: "Lo sentimos, no puede registrarse." }]);
      setTimeout(() => navigate("/news"), 2000);
      return;
    }
    if (currentQuestion + 1 < questions.length) {
      const nextQ = questions[currentQuestion + 1];
      setTimeout(() => {
        setMessages(prev => [...prev, { text: nextQ.q }]);
        setShowOptions(true);
        setCurrentQuestion(prev => prev + 1);
      }, 400);
    } else {
      setTimeout(() => {
        setShowForm(true);
        setMessages([]);
      }, 400);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-3xl h-24 bg-gray-100 flex items-center justify-center">
        <img src={spainFlag} alt="España"/>
      </div>

      <div className="w-full max-w-3xl flex flex-col flex-1 border rounded-lg bg-white shadow-lg mt-4 mb-4">
        {!showForm && (
          <>
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <span className="font-semibold">María F.</span>
              </div>
              <div className="flex items-center gap-2 text-green-500 font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                <span>online</span>
              </div>
            </div>

            <div
              ref={chatContainerRef}
              className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto max-h-150"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] p-3 rounded-lg transition-opacity duration-500 ${
                    msg.isUser ? "bg-yellow-100 self-end opacity-100" : "bg-gray-100 self-start opacity-100"
                  }`}
                  style={{ marginBottom: "10px" }}
                >
                  {msg.text}
                </div>
              ))}

              {showOptions && (
                <div className="flex flex-col gap-2 mt-2">
                  {questions[currentQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      className="bg-yellow-400 text-white font-semibold py-2 rounded w-full hover:bg-yellow-500 transition"
                      onClick={() => handleAnswer(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {showForm && (
          <form ref={formRef} className="p-4 flex flex-col gap-3" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="border p-2 rounded w-full"
              value={formData.firstName}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="border p-2 rounded w-full"
              value={formData.lastName}
              onChange={handleFormChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border p-2 rounded w-full"
              value={formData.email}
              onChange={handleFormChange}
            />
            <div className="flex gap-2 items-center">
              <div className="relative">
                <button
                  type="button"
                  className="w-16 h-10 flex items-center justify-center border rounded cursor-pointer"
                  onClick={() => setOpenCountry(!openCountry)}
                >
                  <img src={spainFlag} alt="España" className="h-6 w-10 object-cover rounded" />
                </button>
                {openCountry && (
                  <ul className="absolute top-full left-0 mt-1 w-16 bg-white border rounded shadow-lg z-10">
                    <li
                      className="cursor-pointer flex items-center justify-center p-1 hover:bg-gray-100"
                      onClick={() => {
                        setFormData({ ...formData, country: "España" });
                        setOpenCountry(false);
                      }}
                    >
                      <img src={spainFlag} alt="España" className="h-6 w-10 object-cover rounded" />
                    </li>
                  </ul>
                )}
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="612 34 56 78"
                required
                className="border p-2 rounded flex-1"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>
            {!isSubmitting && (
              <button
                type="submit"
                className="bg-yellow-400 text-white font-semibold py-2 rounded w-full hover:bg-yellow-500 transition"
              >
                JOIN NOW
              </button>
            )}
            {isSubmitting && (
              <div className="p-3 bg-gray-100 rounded-lg mt-2 text-center animate-fade-in">
                ¡Gracias por su registro! Nuestro consultor se pondrá en contacto con usted.
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
