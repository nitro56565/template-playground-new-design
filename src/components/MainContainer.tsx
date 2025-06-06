/* eslint-disable @typescript-eslint/no-explicit-any */
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Editor from "@monaco-editor/react";
import "../styles/components/MainContainer.css";

const MainContainer = ({
  showEditor,
  showConsole,
  showPreview,
  setShowEditor,
  setShowConsole,
  setShowPreview,
}: any) => {
  // Check if only one panel is visible
  const isOnlyOnePanelVisible =
    [showEditor, showConsole, showPreview].filter(Boolean).length === 1;

  return (
    <PanelGroup direction="horizontal" className="h-screen">
      {/* Left Panel - Editor + Console (Vertical Stack) */}
      <Panel defaultSize={50} minSize={20} className="border-r border-gray-300">
        <PanelGroup direction="vertical" className="h-full">
          {/* Editor Panel */}
          {showEditor && (
            <Panel defaultSize={70} minSize={30} className="bg-gray-100 p-2">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Editor</h2>
                {!isOnlyOnePanelVisible && (
                  <button
                    onClick={() => setShowEditor(false)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* 3 Stacked Editors */}
              <PanelGroup direction="vertical" className="h-[90vh]">
                {/* Concerto Model Editor */}
                <Panel defaultSize={33}>
                  <div className="mb-1 font-medium text-sm text-gray-700">
                    Concerto Model
                  </div>
                  <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    defaultValue="// Concerto model code here"
                  />
                </Panel>
                <PanelResizeHandle className="h-1 bg-gray-300" />

                {/* TemplateMark Editor */}
                <Panel defaultSize={33}>
                  <div className="mb-1 font-medium text-sm text-gray-700">
                    TemplateMark
                  </div>
                  <Editor
                    height="100%"
                    defaultLanguage="markdown"
                    defaultValue="// TemplateMark template here"
                  />
                </Panel>
                <PanelResizeHandle className="h-1 bg-gray-300" />

                {/* JSON Data Editor */}
                <Panel defaultSize={34}>
                  <div className="mb-1 font-medium text-sm text-gray-700">
                    JSON Data
                  </div>
                  <Editor height="100%" defaultLanguage="json" />
                </Panel>
              </PanelGroup>
            </Panel>
          )}
        </PanelGroup>
      </Panel>

      {/* Horizontal Resize Handle Between Left (Editor + Console) and Preview */}
      {(showEditor || showConsole) && showPreview && (
        <PanelResizeHandle className="w-2 bg-gray-300" />
      )}

      {/* Right Panel - Preview */}
      {showPreview && (
        <Panel defaultSize={50} minSize={20} className="bg-white p-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Preview</h2>
            {/* Conditionally render the close button if it's not the only panel */}
            {!isOnlyOnePanelVisible && (
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="w-full h-full border bg-gray-50 p-2">
            Preview content will appear here...
          </div>
        </Panel>
      )}
    </PanelGroup>
  );
};

export default MainContainer;
