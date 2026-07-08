import { useState } from "react"
import { UploadCloud, FileText, Loader2 } from "lucide-react"
import { useTraffic } from "../../context/TrafficContext"

export default function CsvUpload() {
  const { loadFromCsv } = useTraffic()
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState("")

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setFileName(file.name)
    setLoading(true)
    await loadFromCsv(file)
    setLoading(false)
  }

  return (
    <div className="upload-glass">

      <div className="upload-icon">
        <UploadCloud size={28} />
      </div>

      <div className="upload-text">

        <div className="upload-title">
          Upload Traffic Dataset
        </div>

        <div className="upload-sub">
          CSV file containing intersection traffic data
        </div>

        <a
          href="/traffic_input.csv"
          download
          className="upload-download"
        >
          Download sample data to upload
        </a>

      </div>

      <label className="upload-btn">

        <input
          type="file"
          accept=".csv"
          onChange={handleUpload}
          hidden
        />

        {loading ? (
          <Loader2 className="spin" size={18} />
        ) : (
          <FileText size={18} />
        )}

        {loading ? "Processing..." : "Choose CSV"}

      </label>

      {fileName && !loading && (
        <div className="upload-file">
          {fileName}
        </div>
      )}

    </div>
  )
}
