import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../auth/axiosInstance';
import axios from 'axios';

const RiskTradesCreate = () => {
  const [formData, setFormData] = useState({
    currency_pair: '',
    risk_pips: '',
    risk_dollars: '',
    risk_tsh: '',
    gain_pips: '',
    gain_dollars: '',
    gain_tsh: '',
    date_of_trade: '',
    day_of_week: '',
    mt5_chart: null,
    tradeview_chart: null,
    mt5_positions: null,
  });

  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setExchangeRate(response.data.rates.TZS);
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
      }
    };
    fetchExchangeRate();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...formData, [name]: value };

    if (exchangeRate) {
      if (name === 'risk_dollars' || name === 'gain_dollars') {
        const dollarAmount = parseFloat(value) || 0;
        updatedForm[name === 'risk_dollars' ? 'risk_tsh' : 'gain_tsh'] = (dollarAmount * exchangeRate).toFixed(2);
      }
    }

    if (name === 'date_of_trade') {
      const date = new Date(value);
      updatedForm.day_of_week = date.toLocaleDateString('en-US', { weekday: 'long' });
    }

    setFormData(updatedForm);
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== '' && value !== null) {
        form.append(key, value);
      }
    });

    try {
      await axiosInstance.post('/api/risktrades/risktrades/', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Risk Trade created successfully!');
      navigate('/risk-trade');
    } catch (error) {
      console.error('Error creating risk trade:', error);
      alert('Failed to create risk trade.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Create Risk Trade</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Date of Trade */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Trade</label>
          <input type="date" name="date_of_trade" value={formData.date_of_trade} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>

        {/* Day of Week (Auto-filled) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Day of the Week</label>
          <input type="text" name="day_of_week" value={formData.day_of_week} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed" />
        </div>

        {/* Currency Pair */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Currency Pair</label>
          <input type="text" name="currency_pair" value={formData.currency_pair} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
        </div>

        {/* Risk Inputs */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>Risk (Pips)</label>
            <input type="number" name="risk_pips" value={formData.risk_pips} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label>Risk (USD)</label>
            <input type="number" name="risk_dollars" value={formData.risk_dollars} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label>Risk (TZS)</label>
            <input type="number" name="risk_tsh" value={formData.risk_tsh} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed" />
          </div>
        </div>

        {/* Gain Inputs */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>Gain (Pips)</label>
            <input type="number" name="gain_pips" value={formData.gain_pips} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label>Gain (USD)</label>
            <input type="number" name="gain_dollars" value={formData.gain_dollars} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label>Gain (TZS)</label>
            <input type="number" name="gain_tsh" value={formData.gain_tsh} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed" />
          </div>
        </div>

        {/* File Inputs */}
        {['mt5_chart', 'tradeview_chart', 'mt5_positions'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700">{field.replace('_', ' ')}</label>
            <input type="file" name={field} onChange={handleImageChange} className="w-full px-4 py-2 border rounded-md" />
          </div>
        ))}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" disabled={loading} className="px-6 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50">
            {loading ? 'Creating...' : 'Create Risk Trade'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RiskTradesCreate;
